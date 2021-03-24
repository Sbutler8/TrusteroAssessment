from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Comment, db
from app.helpers import *
from werkzeug.utils import secure_filename

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('<int:taskId>')
def comments(taskId):
    comments = Comment.query.filter(Comment.task_id == taskId).all()
    return {"comments": [comment.to_dict() for comment in comments]}

@comment_routes.route('/create', methods=['POST'])
def add_comment():
    """
    Adds list created from user to db
    """
    user = User.query.get(id)
    form = request.get_json(force=True)

    comment = Comment(
        title=form['title'],
        description=form['description'],
        status=form['status'],
        userId=id
        )
    db.session.add(to_do_list)
    car.users.append(user) # add to join table
    db.session.commit()

    return car.to_dict()

@comment_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    comments = Comment.query.byPK(id)
    return {"comments": [comment.to_dict() for comment in comments]}
