from appverte import create_app
from appverte.back.tables import db, User, Actions
import pandas as pd 


# initialise app
app = create_app()


def setup_database(app):
    with app.app_context():
        
        #to use for testing purpose only 
        db.drop_all()

        #not necessary when db is created already
        db.create_all()

    # This loads the action data in the db (do it once)
    actions = pd.read_excel('Liste_actions.xlsx')
    actions = actions.set_index('action_id').T.to_dict()
    with app.app_context():
        for key, value in actions.items():
            db.session.add(
            Actions(
                action_id= str(key),
                title= value['action_title'],
                description= value['action_description'],
                image_url= value['action_image'],
                impact= value['action_impact'],
                category= "{}".format([i.strip() for i in value['category'].split(",")]),
                #source = value['sources'],
                rating = 0,
                liked_by = '{}'.format([]),
                disliked_by = '{}'.format([]),
                top_action = 0,
                comments = '{}'.format({
    'uuid': {
        'user_id':'xxx', 
        'avatar_url':'https://www.w3schools.com/w3images/avatar6.png',
        'username':'Marc',
        'content':"Cette action est super. Je conseille de mettre un peu plus d'huile d'olive :)",
        'likes_count':5,
        'dislikes_count':95,
        'answers': {
            'uuid': {
                'user_id':'xxx', 
                'avatar_url':'https://content.invisioncic.com/v286142/monthly_2020_07/large.png.5eeb4e7900429d4fbea8789a3194c030.png',
                'username':'Martin',
                'content':"J'adore, j'ai essayé et c'est parfait avec 50cl de plus.",
                'likes_count':4,
                'dislikes_count':0
                },
            'uuid': {
                'user_id':'xxx', 
                'avatar_url':'https://content.invisioncic.com/v286142/monthly_2020_07/large.png.5eeb4e7900429d4fbea8789a3194c030.png',
                'username':'Martin',
                'content':"Enfin j'ai aussi ajouté un peu plus de sel.",
                'likes_count':0,
                'dislikes_count':0
                },
            'uuid': {
                'user_id':'xxx', 
                'avatar_url':'https://content.invisioncic.com/v286142/monthly_2020_07/large.png.5eeb4e7900429d4fbea8789a3194c030.png',
                'username':'Martin',
                'content':"Mais c'est vraiment une bonne idée",
                'likes_count':0,
                'dislikes_count':0
                }
        } 
    },
    'uuid2': {
        'user_id':'xxxxx', 
        'avatar_url':'https://www.w3schools.com/w3images/avatar5.png',
        'username':'Marc',
        'content':"Attention c'est du fake !!!!",
        'likes_count':152,
        'dislikes_count':4,
        'answers': {
            'uuid': {
                'user_id':'xxx', 
                'avatar_url':'https://www.w3schools.com/w3images/avatar4.png',
                'username':'Martin',
                'content':"Ca marche pour moi. ",
                'likes_count':4,
                'dislikes_count':0
                }

        } 
    }
}),
            )
            )
        db.session.commit()
    actions = ""

    # This add a fake user
    with app.app_context():
        db.session.add(
        User(
            user_id= 'xxx', 
            username = 'dsdfs',
            password= 'fsdsd',
            avatar_url='https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg', 
            actions= "['sefsdfdsf','sdfdsggr','fdgdgrgd']",
            likes = "['sefsdfdsf','sdfdsggr','fdgdgrgd']",
            dislikes = '{}'.format([]),
            badges = '{}'.format([]),
            level = 0, 
            eating_habits = 'xxx',
            garden = 'xxx',
            transportation = 'xxx',
            involvement = 'xxx'
        )
        )
        db.session.commit()
    #######################################
    #######################################


# launch app
if __name__ == "__main__":
    setup_database(app)
    app.run()


