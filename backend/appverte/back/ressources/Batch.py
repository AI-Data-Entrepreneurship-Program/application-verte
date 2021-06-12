from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User

class Batch(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str,
            help = 'No id title provided')
   
    # get batches for user when connecting --- curl http://127.0.0.1:5000/api/batches/<user_id>
    def get(self, user_id=None):
        user = User.query.filter_by(user_id=user_id).first()
        if not user:
            abort(404, message="{} doesn't exist".format(user_id))
        else:
            batches = {}
            for i in range(12): 
                actions = [123,134,143,243,432,543]
                batches[i] = actions
            
            return batches 


        