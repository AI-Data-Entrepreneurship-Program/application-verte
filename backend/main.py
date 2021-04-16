from appverte import create_app
from flask import Flask, request, render_template
from flask_restful import reqparse, abort, Api, Resource

fakedata = {
    'action1': {'name':'SMS instead of whatsapp',
                'description':'blablabla1',
                'imageurl':'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg'
                },
    'action2': {'name':'Recycle',
                'description':'blablabla2',
                'imageurl':'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg'
                },
    'action3': {'name':'stop meat',
                'description':'blablabla3',
                'imageurl':'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg'
                }
}

# initialise app
app = create_app()


def abortif(carte_id):
    if carte_id not in fakedata:
        abort(404, message="{} doesn't exist".format(carte_id))

parser = reqparse.RequestParser()
parser.add_argument('name')

class Carte(Resource):
    def get(self, carte_id):
        abortif(carte_id)
        return fakedata[carte_id]

class Cartes(Resource):
    def get(self):
        return fakedata

# initialize the API
api = Api(app)
#api.add_resource(Foo, '/Foo', '/Foo/<string:id>')
#api.add_resource(Bar, '/Bar', '/Bar/<string:id>')
api.add_resource(Carte, '/carte/<carte_id>')
api.add_resource(Cartes, '/cartes')

# launch app
if __name__ == "__main__":
    app.run()


#routes
#@app.route('/', methods = ['POST','GET'])
#def index():
#    return render_template("index.html")
