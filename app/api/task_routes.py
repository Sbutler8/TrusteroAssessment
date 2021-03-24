from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Task, db
from app.helpers import *
from werkzeug.utils import secure_filename

task_routes = Blueprint('tasks', __name__)

@task_routes.route('/<int:listId>')
def tasks(listId):
    tasks = Task.query.filter(Task.list_id == listId).all()
    return {"tasks": [task.to_dict() for task in tasks]}

@task_routes.route('/create', methods=['POST'])
def add_comment():
    """
    Adds task created from user to db
    """
    user = User.query.get(id)
    form = request.get_json(force=True)

    task = Task(
        title=form['title'],
        year=form['year'],
        make=form['make'],
        model=form['model'],
        vin=form['vin'],
        pic=form['pic'],
        userId=id
        )
    db.session.add(task)
    car.users.append(user) # add to join table
    db.session.commit()

    return task.to_dict()

@task_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_task(id):
    if request.method == 'PUT':
        data = request.json

        task = Task.query.get(id)
        for key, value in data['db'].items():
            setattr(task, key, value)

        try:
            db.session.commit()
            task_json = jsonify({'task': {'tasks': task.to_dict()}})
            return task_json
        except SQLAlchemyError as e:
            error = str(e.__dict__['orig'])
            print(error)
            db.session.rollback()
            return {'errors': ['An error occurred while retrieving the data']}, 500


@task_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    task = Task.query.byPK(id)
    return {"tasks": [task.to_dict() for task in tasks]}
