from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Actions
from appverte.back.alchemy_encoder import AlchemyEncoder

    
# insert new likes or dislikes --- curl http://127.0.0.1:5000/api/likes -d "user_id=xxxxx&action_id=xxxx&likes=1/-1"
class Likes(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id title provided')
        self.reqparse.add_argument('action_id', type = str, required = True,
            help = 'No action_id title provided')
        self.reqparse.add_argument('likes', type = str, required = True,
            help = 'No likes 1/-1 title provided')
        self.reqparse.add_argument('type', type = str, required = True,
            help = 'No type action/comment/answer provided')
        self.reqparse.add_argument('comment_id', type = str, required = False,
            help = 'No comment_id provided')
        self.reqparse.add_argument('answer_id', type = str, required = False,
            help = 'No answer_id provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        if args['type'] == 'action':
            # add the like or dislike to the user 
            user = User.query.filter_by(user_id=args['user_id']).first()
            
            if int(args['likes']) == 1: 
                likes = ast.literal_eval(user.likes)
                likes.append(args['action_id'])
                user.likes = '{}'.format(likes)
                db.session.commit()
            else: 
                dislikes = ast.literal_eval(user.dislikes)
                dislikes.append(args['action_id'])
                user.dislikes = '{}'.format(dislikes) 
                db.session.commit()


            #modify the notation of the action
            action = json.dumps(Actions.query.filter_by(action_id=args['action_id']).first(), cls=AlchemyEncoder)
            notation_action = int(json.loads(action)["rating"])
            notation_action += int(args['likes'])

            change2 = Actions.query.filter_by(action_id=args['action_id']).first()
            change2.rating = notation_action
            
            # add the user as dislikes or likes 
            if int(args['likes']) == 1: 
                likes = ast.literal_eval(change2.liked_by)
                likes.append(args['user_id'])
                change2.liked_by = '{}'.format(likes)
            
            else: 
                dislikes = ast.literal_eval(change2.disliked_by)
                dislikes.append(args['user_id'])
                change2.disliked_by = '{}'.format(dislikes)
                
            db.session.commit()
        
        if args['type'] == 'comment':
            action = Actions.query.filter_by(action_id=args['action_id']).first()
            comments = action.comments 
            comments = ast.literal_eval(comments)
            comment = comments[args['comment_id']]

            #drop the comment in the comments 
            comments.pop(args['comment_id'])

            if int(args['likes']) == 1: 
                comment['likes_count'] += 1
            else:
                comment['dislikes_count'] += 1

            comment = {args['comment_id']: comment}
            comments.update(comment)
            
            # update the action
            action.comments = '{}'.format(comments)                
            db.session.commit()

              
        if args['type'] == 'answer':
            action = Actions.query.filter_by(action_id=args['action_id']).first()
            comments = action.comments 
            comments = ast.literal_eval(comments)
            comment = comments[args['comment_id']]

            #drop the comment in the comments 
            comments.pop(args['comment_id'])

            if int(args['likes']) == 1: 
                comment['answers'][args['answer_id']]['likes_count'] += 1
            else:
                comment['answers'][args['answer_id']]['dislikes_count'] += 1




            comment = {args['comment_id']: comment}
            comments.update(comment)
            
            # update the action
            action.comments = '{}'.format(comments)                
            db.session.commit()

        return 'done'
