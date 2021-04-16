from flask import Flask
from appverte.config import Config
from flask_restful import Resource, Api
#from appverte.resources.foo import Foo
#from appverte.resources.bar import Bar


def create_app(config_class=Config):

    # initialize the API
    app = Flask(__name__)# static_folder='static', static_url_path='')

    
    #loading the configuration from a separate file
    app.config.from_object(Config)

    #initializing blueprints
    #from appverte.main.routes import main
    #app.register_blueprint(main)

    return app
