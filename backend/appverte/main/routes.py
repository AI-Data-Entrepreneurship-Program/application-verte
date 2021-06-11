from flask import Blueprint, render_template

main = Blueprint('main', __name__, template_folder='/templates')

# route for landing page for the product
@main.route('/', methods = ['POST','GET'])
def index():
    return render_template("index.html")
