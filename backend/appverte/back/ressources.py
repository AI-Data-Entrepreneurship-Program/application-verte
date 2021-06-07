from flask import Flask, request, render_template
from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Actions, Badges, PrototypeData
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
        self.reqparse.add_argument('comments', type = str,
            help = 'No comments provided')

    # get an action by id --- curl http://127.0.0.1:5000/cartes/4
    def get(self, carte_id=None):
        if not carte_id: 
            actions = json.loads(json.dumps(Actions.query.all(), cls=AlchemyEncoder))
            actions = {str(dict["action_id"]): dict for dict in actions}
            for key, value in actions.items():
                value['comments'] = ast.literal_eval(value['comments'])
                value['category'] = ast.literal_eval(value['category'])
                value['liked_by'] = ast.literal_eval(value['liked_by'])
                value['disliked_by'] = ast.literal_eval(value['disliked_by'])
            return actions 
        else: 
            action = Actions.query.filter_by(action_id=carte_id).first()
            if not action:
                abort(404, message="{} doesn't exist".format(carte_id))
            else:
                action = json.loads(json.dumps(action, cls=AlchemyEncoder))
                action = {str(action["action_id"]): action}
                for key, value in action.items():
                    value['comments'] = ast.literal_eval(value['comments'])
                    value['category'] = ast.literal_eval(value['category'])
                    value['liked_by'] = ast.literal_eval(value['liked_by'])
                    value['disliked_by'] = ast.literal_eval(value['disliked_by'])
                
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
                category= "{}".format([i.strip() for i in args['category'].split(",")]),
                rating = 0,
                liked_by = '{}'.format([]),
                disliked_by = '{}'.format([]),
                top_action = 0,
                comments= '{}'.format({}),
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
        if not args['title'] == None:
            action.title = args['title']
        if not args['description'] == None:
            action.description = args['description']
        if not args['image_url'] == None:
            action.image_url = args['image_url']
        if not args['impact'] == None:
            action.impact = args['impact']
        if not args['category'] == None:
            action.category = args['category']
        if not args['rating'] == None:
            action.rating = args['rating']
        if not args['disliked_by'] == None:
            action.disliked_by = args['disliked_by']
        if not args['liked_by'] == None:
            action.liked_by = args['liked_by']
        if not args['top_action'] == None:
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
            for key, value in users.items():
                value['badges'] = ast.literal_eval(value['badges'])
                value['likes'] = ast.literal_eval(value['likes'])
                value['dislikes'] = ast.literal_eval(value['dislikes'])
                value['actions'] = ast.literal_eval(value['actions'])
            return users
        else: 
            user = User.query.filter_by(user_id=user_id).first()
            if not user:
                abort(404, message="{} doesn't exist".format(user_id))
            else:
                user = json.loads(json.dumps(user, cls=AlchemyEncoder))
                user = {str(user["user_id"]): user}
                for key, value in user.items():
                    value['badges'] = ast.literal_eval(value['badges'])
                    value['likes'] = ast.literal_eval(value['likes'])
                    value['dislikes'] = ast.literal_eval(value['dislikes'])
                    value['actions'] = ast.literal_eval(value['actions'])
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
        if not args['username'] == None:
            user.username = args['username']
        if not args['password'] == None:
            user.password = args['password']
        if not args['avatar_url'] == None:
            user.avatar_url = args['avatar_url']
        if not args['level'] == None:
            user.level = args['level']
        if not args['actions'] == None:
            user.actions = args['actions']
        if not args['likes'] == None:
            user.likes = args['likes']
        if not args['dislikes'] == None:
            user.dislikes = args['dislikes']
        if not args['badges'] == None:
            user.badges = args['badges']
        if not args['eating_habits'] == None:
            user.eating_habits = args['eating_habits']
        if not args['garden'] == None:
            user.garden = args['garden']
        if not args['transportation'] == None:
            user.transportation = args['transportation']
        if not args['involvement'] == None:
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
            help = 'No likes 1/-1 title provided')
        self.reqparse.add_argument('type', type = str, required = True,
            help = 'No type action/comment/answer provided')
        self.reqparse.add_argument('comment_id', type = str, required = False,
            help = 'No comment_id provided')
        self.reqparse.add_argument('answer_id', type = str, required = False,
            help = 'No answer_id provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        if args['type'] == 'action':
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
        
        if args['type'] == 'comment':
            action = Actions.query.filter_by(action_id=args['action_id']).first()
            comments = action.comments 
            comments = ast.literal_eval(comments)
            comment = comments[args['comment_id']]

            #drop the comment in the comments 
            comments.pop(args['comment_id'])

            if int(args['likes']) == 1: 
                comment['likes_count'] += 1
            else:
                comment['dislikes_count'] += 1

            comment = {args['comment_id']: comment}
            comments.update(comment)
            
            # update the action
            action.comments = '{}'.format(comments)                
            db.session.commit()

              
        if args['type'] == 'answer':
            action = Actions.query.filter_by(action_id=args['action_id']).first()
            comments = action.comments 
            comments = ast.literal_eval(comments)
            comment = comments[args['comment_id']]

            #drop the comment in the comments 
            comments.pop(args['comment_id'])

            if int(args['likes']) == 1: 
                comment['answers'][args['answer_id']]['likes_count'] += 1
            else:
                comment['answers'][args['answer_id']]['dislikes_count'] += 1




            comment = {args['comment_id']: comment}
            comments.update(comment)
            
            # update the action
            action.comments = '{}'.format(comments)                
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
        if not args['title'] == None:
            badge.title = args['title']
        if not args['description'] == None:
            badge.description = args['description']
        if not args['image_url'] == None:
            badge.image_url = args['image_url']
        if not args['obtained_count'] == None:
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



class Comment(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('action_id', type = str, required = True,
            help = 'No action_id provided')
        self.reqparse.add_argument('comment_id', type = str, required = True,
            help = 'No comment_idprovided')
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id provided')
        self.reqparse.add_argument('avatar_url', type = str, required = True,
            help = 'No avatar_url provided')
        self.reqparse.add_argument('username', type = str, required = True,
            help = 'No username provided')
        self.reqparse.add_argument('content', type = str, required = True,
            help = 'No content provided')
        self.reqparse.add_argument('likes_count', type = str, required = False,
            help = 'No likes_count provided')
        self.reqparse.add_argument('dislikes_count', type = str, required = False,
            help = 'No dislikes_count provided')
        self.reqparse.add_argument('answer_id', type = str, required = False,
            help = 'No answer_id provided')
        self.reqparse.add_argument('type', type = str, required = False,
            help = 'No type answer/comment provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        action = Actions.query.filter_by(action_id=args['action_id']).first()
        print(args)
        # create a comment
        if args['type']=='comment':
            
            #reconstruct the dictionnary 
            comment = {
                args['comment_id']: {
                        'user_id':args['user_id'], 
                        'avatar_url':args['avatar_url'],
                        'username':args['username'],
                        'content':args['content'],
                        'likes_count':0,
                        'dislikes_count':0,
                        'answers': {}
                }
            }
            
            # get the comment 
            comments = action.comments 
            comments = ast.literal_eval(comments)
            comments.update(comment)

            #update the action 
            action.comments = '{}'.format(comments)               
            db.session.commit()

        #create an answer 
        else: 

            answer = {
                args['answer_id']: {
                        'user_id':args['user_id'], 
                        'avatar_url':args['avatar_url'],
                        'username':args['username'],
                        'content':args['content'],
                        'likes_count':0,
                        'dislikes_count':0
                }
            }
            
            # load all comments 
            comments = action.comments 
            comments = ast.literal_eval(comments)

            # get the comment to add the answer 
            comment = comments[args['comment_id']]

            #drop the comment in the comments 
            comments.pop(args['comment_id'])

            #get all answers of the comment 
            answers = comment['answers']

            # add the answer
            answers.update(answer)

            # update the comment and add it back to the list
            comment['answers'] = answers
            comment = {args['comment_id']: comment}
            comments.update(comment)
            
            # update the action
            action.comments = '{}'.format(comments)                
            db.session.commit()

        return 'done'


class Prototype(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('id_session', type = str,
            help = 'No id_session provided')
        self.reqparse.add_argument('time_started', type = str,
            help = 'No time_started provided')
        self.reqparse.add_argument('time_ended', type = str,
            help = 'No time_ended provided')
        self.reqparse.add_argument('device', type = str,
            help = 'No device provided')
        self.reqparse.add_argument('actions_clicked', type = str,
            help = 'No actions_clicked provided')
        self.reqparse.add_argument('actions_added', type = str,
            help = 'No actions_added provided')
        self.reqparse.add_argument('actions_liked_commented', type = str,
            help = 'No actions_liked_commented provided')
        self.reqparse.add_argument('actions_disliked', type = str,
            help = 'No actions_disliked provided')
        self.reqparse.add_argument('actions_viewed', type = str,
            help = 'No actions_viewed provided')
        self.reqparse.add_argument('actions_stopped', type = str,
            help = 'No actions_stopped provided')
        self.reqparse.add_argument('time_spent', type = str,
            help = 'No time_spent provided')
        self.reqparse.add_argument('filters_selected', type = str,
            help = 'No time_spent provided')
        self.reqparse.add_argument('terms_searched', type = str,
            help = 'No time_spent provided')
    
    def post(self): 
        args = self.reqparse.parse_args()
        db.session.add(
            PrototypeData(
                id_session = '{}'.format(args['id_session']),
                time_started  = '{}'.format(args['time_started']),
                time_ended  = '{}'.format(args['time_ended']),
                device  = '{}'.format(args['device']),
                actions_clicked = '{}'.format(args['actions_clicked']),
                actions_added = '{}'.format(args['actions_added']),
                actions_liked_commented = '{}'.format(args['actions_liked_commented']),
                actions_disliked = '{}'.format(args['actions_disliked']),
                actions_viewed = '{}'.format(args['actions_viewed']),
                actions_stopped = '{}'.format(args['actions_stopped']),
                time_spent  = '{}'.format(args['time_spent']),
                filters_selected  = '{}'.format(args['filters_selected']),
                terms_searched  = '{}'.format(args['terms_searched'])
            )
        )
        db.session.commit()
        return "session %s info added" % str(args['id_session'])

    def get(self):
            
        data = json.loads(json.dumps(PrototypeData.query.all(), cls=AlchemyEncoder))

        return data