from flask import Flask, request, render_template
from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Actions
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



# This allows us to get an action by id --- curl http://127.0.0.1:5000/carte/4
class Carte(Resource):
    def get(self, carte_id):
        action = Actions.query.filter_by(action_id=carte_id).first()
        if not action:
            abort(404, message="{} doesn't exist".format(carte_id))
        else:
            return json.dumps(action, cls=AlchemyEncoder)
    
    # add a new action will be here
    #def post(self):


# This allows us to get all actions --- curl http://127.0.0.1:5000/cartes
class Cartes(Resource):
    def get(self):
        actions = Actions.query.all()
        return json.dumps(actions, cls=AlchemyEncoder)


# This allows us to insert a new user --- curl http://127.0.0.1:5000/UserData -d "user_id=xxxxx&regime_alimentaire=xxxx&jardin=xxx&transport=xxx&notation=xxxx"
class UserData(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id title provided')
        self.reqparse.add_argument('regime_alimentaire', type = str, required = True,
            help = 'No regime_alimentaire title provided')
        self.reqparse.add_argument('jardin', type = str, required = True,
            help = 'No jardin title provided')
        self.reqparse.add_argument('transport', type = str, required = True,
            help = 'No transport title provided')
        self.reqparse.add_argument('notation', type = str, required = True,
            help = 'No notation title provided')

    def post(self): 
        args = self.reqparse.parse_args()
        db.session.add(
            User(
                user_id= str(args['user_id']), 
                regime = str(args['regime_alimentaire']),
                espace_exterieur = str(args['jardin']),
                transport = str(args['transport']),
                investissement = str(args['notation']),
                his_actions= "{}".format({})
            )
        )
        db.session.commit()
        return "user %s added" % str(args['user_id'])

# This allows us to insert new likes or dislikes --- curl http://127.0.0.1:5000/likes -d "user_id=xxxxx&action_id=xxxx&likes=1/-1"
class Likes(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id title provided')
        self.reqparse.add_argument('action_id', type = str, required = True,
            help = 'No acton_id title provided')
        self.reqparse.add_argument('likes', type = str, required = True,
            help = 'No likes title provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        #load his actions notation in a dictionnary his_actions = {'action_id':3,'other_action_id':5, ...}
        notation = json.dumps(User.query.filter_by(user_id=args['user_id']).first(), cls=AlchemyEncoder)
        his_actions = ast.literal_eval(json.loads(notation)["his_actions"])
        
        #if a notation exists for the action, sum
        if his_actions.get(args['action_id']):
            his_actions[args['action_id']] += int(args['likes'])

        #if doesn't exist, create 
        else:
            his_actions[args['action_id']] = int(args['likes'])

        #modify the info in the db
        change = User.query.filter_by(user_id=args['user_id']).first()
        change.his_actions = "{}".format(his_actions)
        db.session.commit()

        return 'done'

# get the list of users (for checking purposes) --- curl http://127.0.0.1:5000/UserCheck
class UserCheck(Resource): 
    def get(self):
        users = User.query.all()
        return json.dumps(users, cls=AlchemyEncoder)

