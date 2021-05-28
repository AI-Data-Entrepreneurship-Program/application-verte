from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

#This class create a table User in the database
class User(db.Model):
    user_id = db.Column(db.String(40), primary_key=True)
    username  = db.Column(db.String(40))
    password  = db.Column(db.String(40))
    avatar_url = db.Column(db.String(300))
    actions = db.Column(db.Text())
    likes = db.Column(db.Text())
    dislikes = db.Column(db.Text())
    badges = db.Column(db.Text())
    level = db.Column(db.Integer())
    eating_habits  = db.Column(db.String(40))
    garden = db.Column(db.String(40))
    transportation = db.Column(db.String(40))
    involvement = db.Column(db.String(40))
    

    def __repr__(self):
        return '<User %r>' % self.id

#This class create a table Actions in the database
class Actions(db.Model):
    action_id = db.Column(db.String(40), primary_key=True)
    title  = db.Column(db.String(200))
    description = db.Column(db.String(300))
    impact = db.Column(db.String(300))
    image_url = db.Column(db.String(300))
    category = db.Column(db.Text)
    rating = db.Column(db.Integer())
    liked_by = db.Column(db.Text)
    disliked_by = db.Column(db.Text)
    top_action = db.Column(db.Integer()) #0/1
    comments = db.Column(db.Text)

    def __repr__(self):
        return '<Action %r>' % self.id


#This class create a table Badges in the database
class Badges(db.Model):
    badge_id = db.Column(db.String(40), primary_key=True)
    title  = db.Column(db.String(100))
    description = db.Column(db.String(300))
    image_url = db.Column(db.String(300))
    obtained_count = db.Column(db.Integer())

    def __repr__(self):
        return '<Action %r>' % self.id


