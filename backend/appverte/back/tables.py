from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

#This class create a table User in the database
class User(db.Model):
    user_id = db.Column(db.String(40), primary_key=True)
    regime  = db.Column(db.String(40))
    espace_exterieur = db.Column(db.String(40))
    transport = db.Column(db.String(40))
    investissement = db.Column(db.String(40))
    his_actions = db.Column(db.Text())

    def __repr__(self):
        return '<User %r>' % self.user_id

#This class create a table Actions in the database
class Actions(db.Model):
    action_id = db.Column(db.Integer(), primary_key=True)
    action_title  = db.Column(db.String(40))
    action_description = db.Column(db.String(40))
    action_impact = db.Column(db.String(40))
    action_image = db.Column(db.String(100))
    category = db.Column(db.String(40))
    source = db.Column(db.String(100))
    notation = db.Column(db.Integer())
    
    def __repr__(self):
        return '<Action %r>' % self.action_id

