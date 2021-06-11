from flask_restful import reqparse, abort, Resource
import json
import ast
from appverte.back.tables import db, User, Actions
from appverte.back.alchemy_encoder import AlchemyEncoder

class Comment(Resource): 
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('action_id', type = str, required = True,
            help = 'No action_id provided')
        self.reqparse.add_argument('comment_id', type = str, required = True,
            help = 'No comment_idprovided')
        self.reqparse.add_argument('user_id', type = str, required = True,
            help = 'No user_id provided')
        self.reqparse.add_argument('avatar_url', type = str, required = True,
            help = 'No avatar_url provided')
        self.reqparse.add_argument('username', type = str, required = True,
            help = 'No username provided')
        self.reqparse.add_argument('content', type = str, required = True,
            help = 'No content provided')
        self.reqparse.add_argument('likes_count', type = str, required = False,
            help = 'No likes_count provided')
        self.reqparse.add_argument('dislikes_count', type = str, required = False,
            help = 'No dislikes_count provided')
        self.reqparse.add_argument('answer_id', type = str, required = False,
            help = 'No answer_id provided')
        self.reqparse.add_argument('type', type = str, required = False,
            help = 'No type answer/comment provided')

    def post(self): 
        args = self.reqparse.parse_args()
        
        action = Actions.query.filter_by(action_id=args['action_id']).first()
        print(args)
        # create a comment
        if args['type']=='comment':
            
            #reconstruct the dictionnary 
            comment = {
                args['comment_id']: {
                        'user_id':args['user_id'], 
                        'avatar_url':args['avatar_url'],
                        'username':args['username'],
                        'content':args['content'],
                        'likes_count':0,
                        'dislikes_count':0,
                        'answers': {}
                }
            }
            
            # get the comment 
            comments = action.comments 
            comments = ast.literal_eval(comments)
            comments.update(comment)

            #update the action 
            action.comments = '{}'.format(comments)               
            db.session.commit()

        #create an answer 
        else: 

            answer = {
                args['answer_id']: {
                        'user_id':args['user_id'], 
                        'avatar_url':args['avatar_url'],
                        'username':args['username'],
                        'content':args['content'],
                        'likes_count':0,
                        'dislikes_count':0
                }
            }
            
            # load all comments 
            comments = action.comments 
            comments = ast.literal_eval(comments)

            # get the comment to add the answer 
            comment = comments[args['comment_id']]

            #drop the comment in the comments 
            comments.pop(args['comment_id'])

            #get all answers of the comment 
            answers = comment['answers']

            # add the answer
            answers.update(answer)

            # update the comment and add it back to the list
            comment['answers'] = answers
            comment = {args['comment_id']: comment}
            comments.update(comment)
            
            # update the action
            action.comments = '{}'.format(comments)                
            db.session.commit()

        return 'done'
