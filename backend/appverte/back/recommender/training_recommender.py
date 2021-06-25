import pandas as pd
from sklearn.cluster import KMeans
from kneed import KneeLocator
from fastai.tabular.all import *
from fastai.collab import *


def training_recommender():
    
    ########################################
    # FINDING MOST SIMILAR USERS with kmeans
    
    #loading users
    users = pd.read_excel('users.xlsx')
    users.drop(columns=['likes','dislikes','badges','avatar_url','password','username','actions'], inplace=True)
    users = pd.get_dummies(users, columns=['eating_habits','garden','transportation'])

    # finding number of user groups to create with kmeans 
    sse = []
    list_k = list(range(1, 10))
    for k in list_k:
        km = KMeans(n_clusters=k)
        km.fit(users)
        sse.append(km.inertia_)

    kn_users = KneeLocator(list_k, sse, curve='convex', direction='decreasing')
    kmeans_users = KMeans(n_clusters=kn_users.knee).fit(users)

    #adding groups to users
    users['user_group_kmeans'] = kmeans_users.labels_
    users.head(2)


    ########################################
    # FINDING MOST SIMILAR ACTIONS with kmeans

    #loading actions
    actions = pd.read_excel('Liste_actions.xlsx')
    actions = pd.get_dummies(actions, columns=['category'])
    actions.drop(columns=['action_image','action_title','action_impact','action_description','sources','disliked_by','liked_by','comments',], inplace=True)

    # finding number of actions groups to create with kmeans
    sse = []
    list_k = list(range(1, 10))
    for k in list_k:
        km = KMeans(n_clusters=k)
        km.fit(actions)
        sse.append(km.inertia_)

    kn_actions = KneeLocator(list_k, sse, curve='convex', direction='decreasing')
    kmeans_actions = KMeans(n_clusters=kn_actions.knee).fit(actions)

    # adding group to actions
    actions['action_group_kmeans'] = kmeans_actions.labels_
    actions.head(2)


    ########################################
    # ESTIMATE RATINGS FOR NEW USER-ACTIONS INTERACTIONS based on tabular fastai model
    
    # create dataset with all new interactions between the users and actions 
    done = pd.read_excel('users.xlsx') #to be reimplaced by a request to the database
    done.drop(columns=['likes','dislikes','badges','avatar_url','password','username','level','eating_habits','garden','transportation','involvement'], inplace=True)
    done['actions'] = done['actions'].str.strip(',').str.split('\s*,\s*')
    done = pd.DataFrame(list(zip(done['actions'].explode().keys(), done['actions'].explode())), columns =['user_id', 'action_id'])
    done['action_id'] = ["%s" % x.strip()[5:] for x in done['action_id']]

    # adding user info
    users = pd.read_excel('users.xlsx').drop(columns=['likes','dislikes','badges','avatar_url','password','username','actions'])
    users = pd.get_dummies(users, columns=['eating_habits','garden','transportation'])
    done = done.join(users, how='left', rsuffix='_userinfo', on='user_id')

    # adding action info
    actions = pd.get_dummies(pd.read_excel('Liste_actions.xlsx').drop(columns=['action_impact','action_title','action_description','action_image','sources','comments','liked_by','disliked_by']), columns=['category'])
    actions['action_id'] = ["%s" % x for x in actions['action_id']]
    done = done.merge(actions, how='left', on='action_id')
    action_ids = done['action_id']
    done.drop(columns=['action_id', "user_id_userinfo",'category_ads'], inplace=True)
    done.head(2)

    # load tabular model 
    learner = load_learner('appverte/back/recommender/learner.pkl',  pickle_module=pickle)

    # consolidate with ratings and recommender model 
    def rating(line):
        
        #if user doesn't eat meat and action speaks about meat 0
        if line[17] == 1 and (line[4] == 1 or line[5] == 1):
            return 0 
        
        #if user doesn't have a garden and action requires one 0
        if line[18] == 1 and line[7]==1:
            return 0 
        
        #if user doesn't have a car and action requires one 0
        if line[19] == 1 and line[10]==0:
            return 0 
        
        #else apply model 
        tabular = pd.DataFrame(columns=columns)
        tabular.loc[0] = line
        row, pred, probs = learner.predict(tabular.iloc[0])
        prediction = float(pred[0])
        return prediction 

    done['ratings'] = list(map(rating, done.values))
    
    # train the recommender model 
    done['action_id'] = action_ids
    data = done[['user_id','action_id','ratings']]
    dloader = CollabDataLoaders.from_df(data, user_name = "user_id", item_name = "action_id", rating_name = "ratings", valid_pct = .1)
    dloader.show_batch()
    
    learn = collab_learner(dls = dloader, n_factors = 40, y_range = (0, 10))
    learn.fit_one_cycle(n_epoch = 5, lr_max = 0.01, wd = 1e-2)
    learn.export("appverte/back/recommender/Embedding_Dot_Bias_Recommender_model3.pkl")


    # loading action info
    import numpy
    action_ids =["%s" % x for x in pd.read_excel('Liste_actions.xlsx')["action_id"]]
    # action_ids =[x.strip()[5:] for x in pd.read_excel('Liste_actions.xlsx')["action_id"]]
    action_ids = numpy.array(action_ids, dtype=object)
    action_ids

    # loading user info
    users = pd.read_excel('users.xlsx')['user_id']

    # calculating user weight and saving it : we do not have to load the IA model in production. 
    user_weights = []
    for user in users:
        user_weights.append(learn_prod.model.weight([user], is_item = False).cpu().numpy())
    user_weights = numpy.array(user_weights)

    from numpy import savetxt
    savetxt('users_weights.csv', actions_weight, delimiter=',')

    # calculating actions weights and saving it: we do not have to load the IA model in production. 
    actions_weight = learn_prod.model.weight(action_ids, is_item = True)
    actions_weight = actions_weight.cpu().numpy()
    actions_weight

    from numpy import savetxt
    savetxt('action_weights.csv', actions_weight, delimiter=',')