from flask import Blueprint
from flask_restful import Api

#initializing the blueprint
back = Blueprint('back', __name__)

# initialize the API
api = Api(back)

#import ressources
from appverte.back.ressources.Badge import Badge
from appverte.back.ressources.Batch import Batch
from appverte.back.ressources.Cartes import Cartes
from appverte.back.ressources.Comment import Comment
from appverte.back.ressources.EarnBadge import EarnBadge
from appverte.back.ressources.Favourite import Favourite
from appverte.back.ressources.Likes import Likes
from appverte.back.ressources.Prototype import Prototype
from appverte.back.ressources.Users import Users


# opening access
api.add_resource(Badge, '/api/badges', '/api/badges/<badge_id>') 
api.add_resource(Batch, '/api/batches/<user_id>') 
api.add_resource(Cartes, '/api/cartes', '/api/cartes/<carte_id>') 
api.add_resource(Comment, '/api/comment') 
api.add_resource(EarnBadge, '/api/earnBadge')
api.add_resource(Favourite, '/api/favourite')  
api.add_resource(Likes, '/api/likes') 
api.add_resource(Prototype, '/api/prototypetesting') 
api.add_resource(Users, '/api/users', '/api/users/<user_id>') 



# ACTIONS 
# get all actions --- curl http://127.0.0.1:5000/api/cartes
# get action by list of ids --- curl http://127.0.0.1:5000/api/cartes/4,2,3
# get an action by id --- curl http://127.0.0.1:5000/cartes/api/4
# add a new action curl http://127.0.0.1:5000/api/cartes -d "user_id=xxxxx&regime_alimentaire=xxxx&jardin=xxx&transport=xxx&notation=xxxx"
# modify an action --- curl -X PUT http://127.0.0.1:5000/api/cartes "action_id=xxxxx&title=xxxx&description=xxx&image_url=xxx&impact=xxx&category=xxx&rating=xxxx&disliked_by=xxx&liked_by=xxx&top_action=xxxx"
# delete an action --- curl -X DELETE http://127.0.0.1:5000/api/cartes "action_id=xxxxx"


# USERS 
# get all users --- curl http://127.0.0.1:5000/api/users 
# get a user by id --- curl http://127.0.0.1:5000/api/users/<user_id>
# insert a new user --- curl http://127.0.0.1:5000/api/users -d "user_id=xxxxx&username=xxx&password=xxx&avatar_url=xxx&eating_habits=xxxx&garden=xxx&transportation=xxx&involvement=xxxx"
# modify a user --- curl -X PUT http://127.0.0.1:5000/api/users "user_id=xxxxx&level=xxx&actions=xx&likes=xxx&dislikes=xxxx&badges=xxx&username=xxx&password=xxx&avatar_url=xxx&eating_habits=xxxx&garden=xxx&transportation=xxx&involvement=xxxx"
# delete a user --- curl -X DELETE http://127.0.0.1:5000/api/users "user_id=xxxxx"
# add a new badge to a user --- curl http://127.0.0.1:5000/api/earnBadge -d "badge_id=xxxxx&user_id=xxx"
# add a new action as favorite for a user --- curl http://127.0.0.1:5000/api/favourite -d "user_id=xxxxx&action_id=xxxx"

# BATCHES OF ACTIONS FOR USER (RECOMMENDER SYSTEM)
# get batches for user when connecting --- curl http://127.0.0.1:5000/api/batches/<user_id>


# COMMENTS AND ANSWERS TO COMMENTS 
# add a new comment or answer to a comment --- curl http://127.0.0.1:5000/api/comment -d "action_id=104495155&comment_id=testpost&answer_id=testanswer&user_id=xxx&username=Tom&content=testpostcontent&type=comment/answer&avatar_url=https://www.w3schools.com/w3images/avatar6.png"    


# LIKES 
# insert new likes or dislikes --- curl http://127.0.0.1:5000/api/likes -d "user_id=xxxxx&action_id=xxxx&likes=1/-1"


# TESTING 
# add data to SQL when new user is testing --- curl http://127.0.0.1:5000/api/prototypetesting -d "id_session=xxxxx&time_started=xxxx&time_ended=xxx&device=xxxx&actions_clicked=xxxxx&actions_added=xxxx&actions_liked_commented=xxxx&actions_disliked=xxxx&actions_viewed=xxx&actions_stopped=xxx&time_spent=xxxx&filters_selected=xxxx&terms_searched=xxx"
# get all the data collected --- curl http://127.0.0.1:5000/api/prototypetesting
    
# BADGES 
# get all badges --- curl http://127.0.0.1:5000/api/badges
# get a badge by id --- curl http://127.0.0.1:5000/api/badges/<badge_id>
# add a new badge --- curl http://127.0.0.1:5000/api/badges -d "badge_id=xxxxx&title=xxxx&description=xxx&image_url=xxx"
# modify a badge --- curl -X PUT http://127.0.0.1:5000/api/badges "badge_id=xxxxx&title=xxxx&description=xxx&image_url=xxx&obtained_count=xxx"
# delete a badge --- curl -X DELETE http://127.0.0.1:5000/api/badges "badge_id=xxxxx"
