from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User

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
