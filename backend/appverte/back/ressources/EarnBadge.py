from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Badges
from appverte.back.alchemy_encoder import AlchemyEncoder


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
