from flask import Blueprint
from flask_restful import Api

#initializing the blueprint
back = Blueprint('back', __name__)

# initialize the API
api = Api(back)

#import ressources and opening access 
from appverte.back.ressources.Badge import Badge
api.add_resource(Badge, '/api/badges', '/api/badges/<badge_id>') 

from appverte.back.ressources.Batch import Batch
api.add_resource(Batch, '/api/batches/<user_id>') 

from appverte.back.ressources.Cartes import Cartes
api.add_resource(Cartes, '/api/cartes', '/api/cartes/<carte_id>') 

from appverte.back.ressources.Comment import Comment
api.add_resource(Comment, '/api/comment') 

from appverte.back.ressources.EarnBadge import EarnBadge
api.add_resource(EarnBadge, '/api/earnBadge') 

from appverte.back.ressources.Favourite import Favourite
api.add_resource(Favourite, '/api/favourite') 

from appverte.back.ressources.Likes import Likes
api.add_resource(Likes, '/api/likes') 

from appverte.back.ressources.Prototype import Prototype
api.add_resource(Prototype, '/api/prototypetesting') 

from appverte.back.ressources.Users import Users
api.add_resource(Users, '/api/users', '/api/users/<user_id>') 



 









