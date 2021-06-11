from flask_restful import reqparse, abort, Resource
import json
from appverte.back.tables import db, PrototypeData
import random
from appverte.back.alchemy_encoder import AlchemyEncoder



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
                id_input = '{}'.format(random.randint(0,10000000000)),
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
