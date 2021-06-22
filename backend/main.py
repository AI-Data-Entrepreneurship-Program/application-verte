from appverte import create_app
from appverte.back.tables import db, User, Actions
import pandas as pd 


# initialise app
app = create_app()


#######################################
#######################################
# setup of the database 
# DO ONLY ONCE, THE FIRST TIME
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
                comments = '{}'.format({})
            )
            )
        db.session.commit()
    actions = ""

    # This add a fake user, for testing purposes 
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


setup_database(app)
#######################################
####################################### 


# launch app
if __name__ == "__main__":
    app.run()


