from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Actions
from appverte.back.alchemy_encoder import AlchemyEncoder
import math
import random 
import pandas as pd
import numpy


class Batch(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str,
            help = 'No user_id provided')
   
    # get batches for user when connecting --- curl http://127.0.0.1:5000/api/batches/<user_id>
    def get(self, user_id=None):
        #user = User.query.filter_by(user_id=user_id).first()
        #if not user:
        #    abort(404, message="{} doesn't exist".format(user_id))
        #else:
        try: 
            # loading the model 
            #learn_prod = load_learner('appverte/back/recommender/Embedding_Dot_Bias_Recommender_model3.pkl',  pickle_module=pickle)
            from numpy import loadtxt
            action_weights = loadtxt('action_weights.csv', delimiter=',')
            users_weights = loadtxt('users_weights.csv', delimiter=',')
            
            # calculating user weights
            users = pd.read_excel('users.xlsx')['user_id']
            user_weight = users_weights[users[users == int(user_id)].index[0]]
            
            # preparing action_ids
            action_ids =["%s" % x for x in pd.read_excel('Liste_actions.xlsx')["action_id"]]
            action_ids = numpy.array(action_ids, dtype=object)

            # predict with a dot product
            predictions = actions_weights.dot(user_weight.T).reshape(actions_weights.shape[0],).argsort()
            predictions = pd.DataFrame([action_ids[x] for x in predictions], columns =['action_id'])
            
            # add categories to classify content
            categories = pd.read_excel('Liste_actions.xlsx')[['action_id','category']]
            categories['action_id'] = ["%s" % x for x in categories['action_id']]
            predictions = predictions.merge(categories, on="action_id")
            
            # classify content
            actions = predictions.loc[~predictions['category'].isin(['Point culture', 'Good news', 'ads'])]
            actions1 = list(actions['action_id'][:math.floor(len(actions)/4)])
            actions2 = list(actions['action_id'][math.floor(len(actions)/4):math.floor(len(actions)/2)])
            actions3 = list(actions['action_id'][math.floor(len(actions)/2):math.floor(len(actions)/1.33)])
            actions4 = list(actions['action_id'][math.floor(len(actions)/1.33):])

            scientific_facts = predictions[predictions['category'] == 'Point culture']
            scientific_facts1 = list(scientific_facts['action_id'][:math.floor(len(scientific_facts)/2)])
            scientific_facts2 = list(scientific_facts['action_id'][:math.floor(len(scientific_facts)/2)])

            good_news = predictions[predictions['category'] == 'Good news']
            good_news = list(good_news['action_id'])

            ads = predictions[predictions['category'] == 'ads']
            ads = list(ads['action_id'])
            #ads = ['1111'] * len(actions1)
            random.shuffle(actions1)
            random.shuffle(actions2)
            random.shuffle(actions3)
            random.shuffle(actions4)
            random.shuffle(scientific_facts1)
            random.shuffle(scientific_facts2)
            random.shuffle(good_news)
            #we do not shuffle ads 
            
            # organise content to be returned 
            batches = {}

            for i in range(len(good_news)):
                actions_batch = []
                actions_batch.append(actions1[0])
                actions_batch.append(actions2[0])
                actions_batch.append(actions3[0])
                actions_batch.append(actions4[0])
                actions_batch.append(scientific_facts1[0])
                actions_batch.append(scientific_facts2[0])
                actions_batch.append(good_news[0])
                random.shuffle(actions_batch)
                actions_batch.insert(random.randint(5,7), ads[0])
                
                actions1.pop(0)
                actions2.pop(0)
                actions3.pop(0)
                actions4.pop(0)
                scientific_facts1.pop(0)
                scientific_facts2.pop(0)
                good_news.pop(0)
                ads.pop(0)
                batches[i] = ','.join(actions_batch)
                
            return batches 

        except: 

            #######################
            # for testing purposes before the recommender system
            keys = Actions.query.with_entities(Actions.action_id).all()
            keys = [''.join(key) for key in keys]
            random.shuffle(keys)
            batches = {}
            for i in range(math.floor(len(keys)/8)): 
                batches[i] = ','.join(keys[:8])
                keys = keys[8:]
            #######################

            return batches