from appverte.back.tables import db, Admin
from flask_bcrypt import generate_password_hash, check_password_hash
from flask import request, Response
from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token
import datetime


# Get a TOKEN WHEN CONNECTING FOR THE FIRST TIME
class LoginApi(Resource):
  def __init__(self):
      self.reqparse = reqparse.RequestParser()
      self.reqparse.add_argument('username', type = str)
      self.reqparse.add_argument('password', type = str)
      
  def post(self):
    args = self.reqparse.parse_args()
    admin = Admin.query.filter_by(username=args['username']).first()
    authorized = check_password_hash(admin.password, args['password'])
    if not authorized:
      return {'error': 'username or password invalid'}, 401

    access_token = create_access_token(identity=str(admin.id), expires_delta=datetime.timedelta(days=7))
    return {'token': access_token}, 200


    ### source https://dev.to/paurakhsharma/flask-rest-api-part-3-authentication-and-authorization-5935