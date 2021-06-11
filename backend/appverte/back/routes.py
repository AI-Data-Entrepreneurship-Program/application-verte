from flask import Blueprint
from flask_restful import Api

#initializing the blueprint
back = Blueprint('back', __name__)

# initialize the API
api = Api(back)


from appverte.back.ressources import Cartes, Users, Badge, Likes, Favourite, EarnBadge, Comment, Prototype

api.add_resource(Cartes, '/api/cartes', '/api/cartes/<carte_id>')  
api.add_resource(Users, '/api/users', '/api/users/<user_id>') 
api.add_resource(Badge, '/api/badges', '/api/badges/<badge_id>') 
api.add_resource(Likes, '/api/likes') 
api.add_resource(Favourite, '/api/favourite') 
api.add_resource(EarnBadge, '/api/earnBadge') 
api.add_resource(Comment, '/api/comment') 
api.add_resource(Prototype, '/api/prototypetesting') 

