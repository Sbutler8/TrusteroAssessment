from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, List, db
from app.helpers import *
from werkzeug.utils import secure_filename

list_routes = Blueprint('lists', __name__)

@list_routes.route('/')
def lists():
    lists = List.query.all()
    return {"lists": [to_do_list.to_dict() for to_do_list in lists]}

@list_routes.route('/create', methods=['POST'])
def add_list():
    """
    Adds list created from user to db
    """
    user = User.query.get(id)
    form = request.get_json(force=True)

    to_do_list = List(
        title=form['title'],
        year=form['year'],
        make=form['make'],
        model=form['model'],
        vin=form['vin'],
        pic=form['pic'],
        userId=id
        )
    db.session.add(to_do_list)
    car.users.append(user) # add to join table
    db.session.commit()

    return car.to_dict()

@list_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    lists = List.query.byPK(id)
    return {"lists": [to_do_list.to_dict() for to_do_list in lists]}
