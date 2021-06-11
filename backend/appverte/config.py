import json
import pymysql

# load private information 
with open('appverte/config.json') as config_file:
    config = json.load(config_file)


class Config:
    SECRET_KEY= config.get('SECRET_KEY')
    
    #local database
    SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/test.db'

    #prod database 
    #SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{username}:{password}@{hostname}/{databasename}".format(
     #   username="turtleiatech",
      #  password="AzErTyUiOp26120!",
       # hostname="turtleiatech.mysql.pythonanywhere-services.com",
        #databasename="turtleiatech$turtle",
    #)

    SQLALCHEMY_POOL_RECYCLE = 299
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CACHE_TYPE = "null"
    

    