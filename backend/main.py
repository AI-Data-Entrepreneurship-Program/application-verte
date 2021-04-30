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
                action_id= key,
                action_title= value['action_title'],
                action_description= value['action_description'],
                action_image= value['action_image'],
                action_impact= value['action_impact'],
                category= value['category'],
                source = value['sources'],
                notation = 0
            )
            )
        db.session.commit()
    actions = ""

    # This add a fake user
    with app.app_context():
        db.session.add(
        User(
        user_id= 'xxx', 
        regime = 'xxx',
        espace_exterieur = 'xxx',
        transport = 'xxx',
        investissement = 'xxx',
        his_actions= "{}".format({"1":1,"2":5})
        )
        )
        db.session.commit()
    #######################################
    #######################################


# launch app
if __name__ == "__main__":
    setup_database(app)
    app.run()


