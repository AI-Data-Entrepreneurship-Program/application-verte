import json


with open('appverte/config.json') as config_file:
    config = json.load(config_file)


class Config:
    SECRET_KEY= config.get('SECRET_KEY')
    
    SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/test.db'
    
    CACHE_TYPE = "null"
    #PERMANENT_SESSION_LIFETIME =  timedelta(minutes=15)
