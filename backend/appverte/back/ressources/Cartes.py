from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, Actions
from appverte.back.alchemy_encoder import AlchemyEncoder



# returning or updating actions 
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

    def get(self, carte_id=None):
        
        # get all actions --- curl http://127.0.0.1:5000/cartes
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
            
            # get action by list of ids --- curl http://127.0.0.1:5000/cartes/4,2,3
            if "," in carte_id:
                carte_ids = carte_id.split(",")
                actions = Actions.query.filter(Actions.action_id.in_(carte_ids)).all()
                actions = json.loads(json.dumps(actions, cls=AlchemyEncoder))
                actions = {str(dict["action_id"]): dict for dict in actions}
                for key, value in actions.items():
                    value['comments'] = ast.literal_eval(value['comments'])
                    value['category'] = ast.literal_eval(value['category'])
                    value['liked_by'] = ast.literal_eval(value['liked_by'])
                    value['disliked_by'] = ast.literal_eval(value['disliked_by'])
                return actions 

            # get an action by id --- curl http://127.0.0.1:5000/cartes/4
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
    
    # add a new action curl http://127.0.0.1:5000/cartes -d "user_id=xxxxx&regime_alimentaire=xxxx&jardin=xxx&transport=xxx&notation=xxxx"
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
