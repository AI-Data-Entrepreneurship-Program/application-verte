
# Back end server - Turtle

This backend server has been created for an app offering an information feed for adopting sustainable behaviors (actions, good news, scientific facts). This project contains : the server and the recommender system. The recommender system is situated at backend/appverte/back/recommender/

# Quick start
```
python3 -m <envname> /path/to/new/virtual/environment
source <envname>/bin/activate
pip install -r requirements.txt
python main.py 
```
A config.json file containing the passwords must be added.
# Interacting with the server

Authentification 

```
curl http://127.0.0.1:5000/api/auth/login -d "username=xxxxxx&password=xxxxxxxx"
```
You obtain a token valid for 7 days to use in any query:
```
curl -H "Authorization: Bearer <TOKEN>" http://127.0.0.1:5000/api/cartes
```

# Interacting with actions
Get all actions 

```
curl http://127.0.0.1:5000/api/cartes
```
Get action by list of ids 
```
curl http://127.0.0.1:5000/api/cartes/4,2,3
```
Get an action by id
```
curl http://127.0.0.1:5000/cartes/api/4
```
Add a new action 
```
curl http://127.0.0.1:5000/api/cartes -d "user_id=xxxxx&regime_alimentaire=xxxx&jardin=xxx&transport=xxx&notation=xxxx"
```
Modify an action
```
curl -X PUT http://127.0.0.1:5000/api/cartes "action_id=xxxxx&title=xxxx&description=xxx&image_url=xxx&impact=xxx&category=xxx&rating=xxxx&disliked_by=xxx&liked_by=xxx&top_action=xxxx"
```
Delete an action
```
curl -X DELETE http://127.0.0.1:5000/api/cartes "action_id=xxxxx"
```
Getting a batch of actions (recommender system)
```
curl http://127.0.0.1:5000/api/batches/<user_id>
```
Adding comments and answers to actions
```
curl http://127.0.0.1:5000/api/comment -d "action_id=104495155&comment_id=testpost&answer_id=testanswer&user_id=xxx&username=Tom&content=testpostcontent&type=comment/answer&avatar_url=https://www.w3schools.com/w3images/avatar6.png"    
```
Insert new likes or dislikes
```
curl http://127.0.0.1:5000/api/likes -d "user_id=xxxxx&action_id=xxxx&likes=1/-1"
```

# Interacting with users
Get all users
```
http://127.0.0.1:5000/api/users 
```
Get a user by id
```
curl http://127.0.0.1:5000/api/users/<user_id>
```
Insert a new user
```
curl http://127.0.0.1:5000/api/users -d "user_id=xxxxx&username=xxx&password=xxx&avatar_url=xxx&eating_habits=xxxx&garden=xxx&transportation=xxx&involvement=xxxx"
```
Modify a user
```
curl -X PUT http://127.0.0.1:5000/api/users "user_id=xxxxx&level=xxx&actions=xx&likes=xxx&dislikes=xxxx&badges=xxx&username=xxx&password=xxx&avatar_url=xxx&eating_habits=xxxx&garden=xxx&transportation=xxx&involvement=xxxx"
```
Delete a user
```
curl -X DELETE http://127.0.0.1:5000/api/users "user_id=xxxxx"
```
Add a new badge to a user
```
curl http://127.0.0.1:5000/api/earnBadge -d "badge_id=xxxxx&user_id=xxx"
```
Add a new action as favorite for a user
```
curl http://127.0.0.1:5000/api/favourite -d "user_id=xxxxx&action_id=xxxx"
```


# Testing the prototype
Add data to SQL when new user is testing 
```
curl http://127.0.0.1:5000/api/prototypetesting -d "id_session=xxxxx&time_started=xxxx&time_ended=xxx&device=xxxx&actions_clicked=xxxxx&actions_added=xxxx&actions_liked_commented=xxxx&actions_disliked=xxxx&actions_viewed=xxx&actions_stopped=xxx&time_spent=xxxx&filters_selected=xxxx&terms_searched=xxx"
```
Get all the data collected
```
curl http://127.0.0.1:5000/api/prototypetesting
```
    
# Interacting with badges
Get all badges
```
curl http://127.0.0.1:5000/api/badges 
```
Get a badge by id
```
curl http://127.0.0.1:5000/api/badges/<badge_id>
```
Add a new badge
```
curl http://127.0.0.1:5000/api/badges -d "badge_id=xxxxx&title=xxxx&description=xxx&image_url=xxx"
```
Modify a badge
```
curl -X PUT http://127.0.0.1:5000/api/badges "badge_id=xxxxx&title=xxxx&description=xxx&image_url=xxx&obtained_count=xxx"
```
Delete a badge
```
curl -X DELETE http://127.0.0.1:5000/api/badges "badge_id=xxxxx"
```
