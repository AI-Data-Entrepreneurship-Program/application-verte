from appverte.back.tables import db, User
import json
from appverte.back.alchemy_encoder import AlchemyEncoder
from flask_restful import reqparse, abort, Resource
import ast

    
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

        # get all users --- curl http://127.0.0.1:5000/api/users 
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

            # get a user by id --- curl http://127.0.0.1:5000/api/users/<user_id>
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

    # insert a new user --- curl http://127.0.0.1:5000/api/users -d "user_id=xxxxx&username=xxx&password=xxx&avatar_url=xxx&eating_habits=xxxx&garden=xxx&transportation=xxx&involvement=xxxx"
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

    # modify a user --- curl -X PUT http://127.0.0.1:5000/api/users "user_id=xxxxx&level=xxx&actions=xx&likes=xxx&dislikes=xxxx&badges=xxx&username=xxx&password=xxx&avatar_url=xxx&eating_habits=xxxx&garden=xxx&transportation=xxx&involvement=xxxx"
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


    # delete a user --- curl -X DELETE http://127.0.0.1:5000/api/users "user_id=xxxxx"
    def delete(self):
        args = self.reqparse.parse_args()
        User.query.filter_by(user_id=args['user_id']).delete()
        db.session.commit()
        return 'done'

