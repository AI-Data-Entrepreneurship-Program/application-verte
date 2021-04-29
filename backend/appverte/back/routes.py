from flask import Blueprint
from flask_restful import Api

#initializing the blueprint
back = Blueprint('back', __name__)

# initialize the API
api = Api(back)


from appverte.back.ressources import Carte, Cartes, UserData, Likes, UserCheck

api.add_resource(Carte, '/carte/<carte_id>')  # get an action by id --- curl http://127.0.0.1:5000/carte/id
api.add_resource(Cartes, '/cartes') # get all actions --- curl http://127.0.0.1:5000/cartes
api.add_resource(UserData, '/UserData') # insert a new user --- curl http://127.0.0.1:5000/UserData -d "user_id=xxxxx&regime_alimentaire=xxxx&jardin=xxx&transport=xxx&notation=xxxx"
api.add_resource(Likes, '/likes') # insert new likes or dislikes --- curl http://127.0.0.1:5000/likes -d "user_id=xxxxx&action_id=xxxx&likes=1/-1"
api.add_resource(UserCheck, '/UserCheck') # get the list of users (for checking purposes) --- curl http://127.0.0.1:5000/UserCheck
