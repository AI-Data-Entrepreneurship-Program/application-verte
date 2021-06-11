from flask import Flask
from appverte.config import Config
from appverte.back.tables import db
from flask_cors import CORS, cross_origin


def create_app(config_class=Config):

    
    app = Flask(__name__)

    # allowing cors requests 
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    app.config['CORS_HEADERS'] = 'Content-Type'
    
    #loading the configuration from a separate file
    app.config.from_object(Config)
    
    # initializing the db
    db.init_app(app) 

    #initializing blueprints (separate modules)
    from appverte.main.routes import main
    from appverte.back.routes import back
    app.register_blueprint(main)
    app.register_blueprint(back)


    return app
