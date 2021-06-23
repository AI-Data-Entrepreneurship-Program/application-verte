from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, Badges
from appverte.back.alchemy_encoder import AlchemyEncoder
from flask_jwt_extended import jwt_required


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

    @jwt_required()
    def get(self, badge_id=None):

        # get all badges --- curl http://127.0.0.1:5000/api/badges 
        if not badge_id: 
            badges = json.loads(json.dumps(Badges.query.all(), cls=AlchemyEncoder))
            badges = {str(dict["badge_id"]): dict for dict in badges}
            return badges
        else: 

            # get a badge by id --- curl http://127.0.0.1:5000/api/badges/<badge_id>
            badge = Badges.query.filter_by(badge_id=badge_id).first()
            if not badge:
                abort(404, message="{} doesn't exist".format(badge_id))
            else:
                badge = json.loads(json.dumps(badge, cls=AlchemyEncoder))
                badge = {str(badge["badge_id"]): badge}
                return badge     
    
    # add a new badge --- curl http://127.0.0.1:5000/api/badges -d "badge_id=xxxxx&title=xxxx&description=xxx&image_url=xxx"
    @jwt_required()
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

    # modify a badge --- curl -X PUT http://127.0.0.1:5000/api/badges "badge_id=xxxxx&title=xxxx&description=xxx&image_url=xxx&obtained_count=xxx"
    @jwt_required()
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
            badge.obtained_count = int(args['obtained_count'])
        db.session.commit()

        return 'done'

    # delete a badge --- curl -X DELETE http://127.0.0.1:5000/api/badges "badge_id=xxxxx"
    @jwt_required()
    def delete(self):
        args = self.reqparse.parse_args()
        Badges.query.filter_by(badge_id=args['badge_id']).delete()
        db.session.commit()
        return 'done'

