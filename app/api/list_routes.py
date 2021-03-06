from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, List, Task, Comment, db
from app.helpers import *
from werkzeug.utils import secure_filename

list_routes = Blueprint('lists', __name__)

@list_routes.route('/<int:id>')
def lists(id):
    lists = List.query.filter(List.user_id == id).all()
    return {"lists": [to_do_list.to_dict() for to_do_list in lists]}

@list_routes.route('/edit/<int:id>', methods=['PUT'])
def edit_list(id):
    list_to_edit = List.query.get(id)
    form = request.get_json(force=True)

    list_to_edit.title = form['title']

    db.session.commit()



    return list_to_edit.to_dict()

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

@list_routes.route('/remove/<int:id>', methods=['DELETE'])
def delete(id):
    tasks = Task.query.filter(Task.list_id == id).all()

    for task in tasks:
        Comment.query.filter(Comment.task_id == task.id).delete()

    Task.query.filter(Task.list_id == id).delete()
    List.query.filter(List.id == id).delete()
    db.session.commit()

    return 'List Remove'
