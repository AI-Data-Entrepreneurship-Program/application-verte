from flask import Flask, request, render_template
from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Actions, Badges
from sqlalchemy.ext.declarative import DeclarativeMeta


# This class is used to transform db output in string
class AlchemyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj.__class__, DeclarativeMeta):
            # an SQLAlchemy class
            fields = {}
            for field in [x for x in dir(obj) if not x.startswith('_') and x != 'metadata']:
                data = obj.__getattribute__(field)
                try:
                    json.dumps(data) # this will fail on non-encodable values, like other classes
                    fields[field] = data
                except TypeError:
                    fields[field] = None
            # a json-encodable dict
            return fields
        return json.JSONEncoder.default(self, obj)



class Cartes(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('action_id', type = str,
            help = 'No id provided')
        self.reqparse.add_argument('title', type = str,
            help = 'No title provided')
        self.reqparse.add_argument('description', type = str,
            help = 'No description provided')
        self.reqparse.add_argument('impact', type = str,
            help = 'No impact provided')
        self.reqparse.add_argument('image_url', type = str,
            help = 'No image_url provided')
        self.reqparse.add_argument('category', type = str,
            help = 'No category provided')
        self.reqparse.add_argument('rating', type = int,
            help = 'No rating provided')
        self.reqparse.add_argument('liked_by', type = str,
            help = 'No liked_by provided')
        self.reqparse.add_argument('disliked_by', type = str,
            help = 'No disliked_by provided')
        self.reqparse.add_argument('top_action', type = int,
            help = 'No top_action provided')

    # get an action by id --- curl http://127.0.0.1:5000/cartes/4
    def get(self, carte_id=None):
        if not carte_id: 
            actions = json.loads(json.dumps(Actions.query.all(), cls=AlchemyEncoder))
            actions = {str(dict["action_id"]): dict for dict in actions}
            return actions 
        else: 
            action = Actions.query.filter_by(action_id=carte_id).first()
            if not action:
                abort(404, message="{} doesn't exist".format(carte_id))
            else:
                action = json.loads(json.dumps(action, cls=AlchemyEncoder))
                action = {str(action["action_id"]): action}
                return action
    
    # add a new action 
    def post(self):
        args = self.reqparse.parse_args()
        db.session.add(
            Actions(
                action_id= args['action_id'],
                title=args['title'],
                description= args['description'],
                image_url= args['image_url'],
                impact= args['impact'],
                category= args['category'],
                rating = 0,
                liked_by = '{}'.format([]),
                disliked_by = '{}'.format([]),
                top_action = 0
            )
            )
        db.session.commit()
        return 'done'

    # modify action 
    def put(self):
        args = self.reqparse.parse_args()
        
        action = Actions.query.filter_by(action_id=args['action_id']).first()

        #check the args added
        #for arg in args: 
        #    action[arg] = args[arg]
        if 'title' in args:
            action.title = args['title']
        if 'description' in args:
            action.description = args['description']
        if 'image_url' in args:
            action.image_url = args['image_url']
        if 'impact' in args:
            action.impact = args['impact']
        if 'category' in args:
            action.category = args['category']
        if 'rating' in args:
            action.rating = args['rating']
        if 'disliked_by' in args:
            action.disliked_by = args['disliked_by']
        if 'liked_by' in args:
            action.liked_by = args['liked_by']
        if 'top_action' in args:
            action.top_action = args['top_action']
        db.session.commit()

        return 'done'

    # delete action 
    def delete(self):
        args = self.reqparse.parse_args()
        Actions.query.filter_by(id=args['action_id']).delete()
        db.session.commit()
        return 'done'




# This allows us to insert a new user --- curl http://127.0.0.1:5000/UserData -d "user_id=xxxxx&regime_alimentaire=xxxx&jardin=xxx&transport=xxx&notation=xxxx"
class Users(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str,
            help = 'No id title provided')
        self.reqparse.add_argument('username', type = str,
            help = 'No username title provided')
        self.reqparse.add_argument('password', type = str,
            help = 'No password title provided')
        self.reqparse.add_argument('avatar_url', type = str,
            help = 'No avatar_url provided')
        self.reqparse.add_argument('eating_habits', type = str,
            help = 'No eating_habits provided')
        self.reqparse.add_argument('garden', type = str,
            help = 'No garden provided')
        self.reqparse.add_argument('transportation', type = str,
            help = 'No transportation provided')
        self.reqparse.add_argument('involvement', type = str,
            help = 'No involvement provided')
    
    def get(self, user_id=None):
        if not user_id: 
            users = json.loads(json.dumps(User.query.all(), cls=AlchemyEncoder))
            users = {str(dict["user_id"]): dict for dict in users}
            return users
        else: 
            user = User.query.filter_by(user_id=user_id).first()
            if not user:
                abort(404, message="{} doesn't exist".format(user_id))
            else:
                user = json.loads(json.dumps(user, cls=AlchemyEncoder))
                user = {str(user["user_id"]): user}
                return user

    # insert a new user
    def post(self): 
        args = self.reqparse.parse_args()
        db.session.add(
            User(
                user_id= str(args['user_id']), 
                username= str(args['username']), 
                password= str(args['password']), 
                avatar_url = str(args['avatar_url']),
                actions = '{}'.format([]),
                likes = '{}'.format([]),
                dislikes = '{}'.format([]),
                badges = '{}'.format([]),
                level = 0,
                eating_habits = str(args['eating_habits']),
                garden = str(args['garden']),
                transportation = str(args['transportation']),
                involvement = str(args['involvement'])
            )
        )
        db.session.commit()
        return "user %s added" % str(args['user_id'])

    # modify action 
    def put(self):
        args = self.reqparse.parse_args()
        
        user = User.query.filter_by(user_id=args['user_id']).first()

        #check the args added
        if 'username' in args:
            user.username = args['username']
        if 'password' in args:
            user.password = args['password']
        if 'avatar_url' in args:
            user.avatar_url = args['avatar_url']
        if 'level' in args:
            user.level = args['level']
        if 'actions' in args:
            user.actions = args['actions']
        if 'likes' in args:
            user.likes = args['likes']
        if 'dislikes' in args:
            user.dislikes = args['dislikes']
        if 'badges' in args:
            user.badges = args['badges']
        if 'eating_habits' in args:
            user.eating_habits = args['eating_habits']
        if 'garden' in args:
            user.garden = args['garden']
        if 'transportation' in args:
            user.transportation = args['transportation']
        if 'involvement' in args:
            user.involvement = args['involvement']
        #for arg in args: 
        #    user.arg = args[arg]
        db.session.commit()

        return 'done'

    # delete action 
    def delete(self):
        args = self.reqparse.parse_args()
        User.query.filter_by(user_id=args['user_id']).delete()
        db.session.commit()
        return 'done'



# This allows us to insert new likes or dislikes --- curl http://127.0.0.1:5000/likes -d "user_id=xxxxx&action_id=xxxx&likes=1/-1"
class Likes(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id title provided')
        self.reqparse.add_argument('action_id', type = str, required = True,
            help = 'No action_id title provided')
        self.reqparse.add_argument('likes', type = str, required = True,
            help = 'No likes title provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        # add the like or dislike to the user 
        user = User.query.filter_by(user_id=args['user_id']).first()
        
        if int(args['likes']) == 1: 
            likes = ast.literal_eval(user.likes)
            likes.append(args['action_id'])
            user.likes = '{}'.format(likes)
            db.session.commit()
        else: 
            dislikes = ast.literal_eval(user.dislikes)
            dislikes.append(args['action_id'])
            user.dislikes = '{}'.format(dislikes) 
            db.session.commit()


        #modify the notation of the action
        action = json.dumps(Actions.query.filter_by(action_id=args['action_id']).first(), cls=AlchemyEncoder)
        notation_action = int(json.loads(action)["rating"])
        notation_action += int(args['likes'])

        change2 = Actions.query.filter_by(action_id=args['action_id']).first()
        change2.rating = notation_action
        
        # add the user as dislikes or likes 
        if int(args['likes']) == 1: 
            likes = ast.literal_eval(change2.liked_by)
            likes.append(args['user_id'])
            change2.liked_by = '{}'.format(likes)
           
        else: 
            dislikes = ast.literal_eval(change2.disliked_by)
            dislikes.append(args['user_id'])
            change2.disliked_by = '{}'.format(dislikes)
            
        db.session.commit()
        return 'done'


class Favourite(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id title provided')
        self.reqparse.add_argument('action_id', type = str, required = True,
            help = 'No action_id title provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        # add the like or dislike to the user 
        user = User.query.filter_by(user_id=args['user_id']).first()
        
        favourites = ast.literal_eval(user.actions)
        favourites.append(args['action_id'])
        user.actions  = '{}'.format(favourites)
        db.session.commit()

        return 'done'


# add badges 
class Badge(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('badge_id', type = str,
            help = 'No badge_id provided')
        self.reqparse.add_argument('title', type = str,
            help = 'No title provided')
        self.reqparse.add_argument('description', type = str,
            help = 'No description provided')
        self.reqparse.add_argument('image_url', type = str,
            help = 'No image_url provided')


    def get(self, badge_id=None):
        if not badge_id: 
            badges = json.loads(json.dumps(Badges.query.all(), cls=AlchemyEncoder))
            badges = {str(dict["badge_id"]): dict for dict in badges}
            return badges
        else: 
            badge = Badges.query.filter_by(badge_id=badge_id).first()
            if not badge:
                abort(404, message="{} doesn't exist".format(badge_id))
            else:
                badge = json.loads(json.dumps(badge, cls=AlchemyEncoder))
                badge = {str(badge["badge_id"]): badge}
                return badge     
    
    # add a new action 
    def post(self):
        args = self.reqparse.parse_args()
        db.session.add(
            Badges(
                badge_id= args['badge_id'],
                title=args['title'],
                description= args['description'],
                image_url= args['image_url'],
                obtained_count = 0
            )
            )
        db.session.commit()
        return 'done'

    # modify action 
    def put(self):
        args = self.reqparse.parse_args()
        
        badge = Badges.query.filter_by(badge_id=args['badge_id']).first()

        #check the args added
        #for arg in args: 
        #    badge[arg] = args[arg]
        if 'title' in args:
            badge.title = args['title']
        if 'description' in args:
            badge.description = args['description']
        if 'image_url' in args:
            badge.image_url = args['image_url']
        if 'obtained_count' in args:
            badge.obtained_count = args['obtained_count']
        db.session.commit()

        return 'done'

    # delete action 
    def delete(self):
        args = self.reqparse.parse_args()
        Badges.query.filter_by(badge_id=args['badge_id']).delete()
        db.session.commit()
        return 'done'



# earn a badge 
class EarnBadge(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id provided')
        self.reqparse.add_argument('badge_id', type = str, required = True,
            help = 'No badge_id provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        # add the like or dislike to the user 
        user = User.query.filter_by(user_id=args['user_id']).first()

        badges = ast.literal_eval(user.badges)
        badges.append(args['badge_id'])
        user.badges = '{}'.format(badges)
        db.session.commit()

        # add +1 to the count of the badge
        badge = Badges.query.filter_by(badge_id=args['badge_id']).first()
        badge.obtained_count += 1
        db.session.commit()

        return 'done'
