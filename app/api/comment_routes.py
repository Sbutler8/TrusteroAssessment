from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Comment, Task, db
from app.helpers import *
from werkzeug.utils import secure_filename

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('<int:taskId>')
def comments(taskId):
    comments = Comment.query.filter(Comment.task_id == taskId).all()
    return {"comments": [comment.to_dict() for comment in comments]}

@comment_routes.route('/add/<int:id>', methods=['POST'])
def add_comment(id):

    task = Task.query.get(id)
    form = request.get_json(force=True)

    comment = Comment(
        comment=form['comment'],
        task_id=id
        )
    db.session.add(comment)
    db.session.commit()

    return {'comment': comment.to_dict()}

@comment_routes.route('/remove/<int:id>', methods=['DELETE'])
def delete(id):
    comment = Comment.query.filter(Comment.id == id).delete()
    db.session.commit()
    return
