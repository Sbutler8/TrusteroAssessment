from werkzeug.security import generate_password_hash
from app.models import db, Task, Comment


def seed_comments():

    task_1 = Task.query.filter(Task.title == 'Laundry').first()
    task_2 = Task.query.filter(Task.title == 'Grocery Shopping').first()
    task_3 = Task.query.filter(Task.title == 'Documentation').first()
    task_4 = Task.query.filter(Task.title == 'Time Cards').first()
    task_5 = Task.query.filter(Task.title == 'Science').first()
    task_6 = Task.query.filter(Task.title == 'Email').first()
    task_7 = Task.query.filter(Task.title == 'Workout').first()
    task_8 = Task.query.filter(Task.title == 'Meal Prep').first()
    task_9 = Task.query.filter(Task.title == 'Job').first()
    task_10 = Task.query.filter(Task.title == 'Clean').first()
    task_11 = Task.query.filter(Task.title == 'Returns').first()
    task_12 = Task.query.filter(Task.title == 'Printer').first()
    task_13 = Task.query.filter(Task.title == 'Home').first()
    task_14 = Task.query.filter(Task.title == 'Grades').first()
    task_15 = Task.query.filter(Task.title == 'Soccer').first()
    task_16 = Task.query.filter(Task.title == 'Pets').first()

    # Comments for User, Demo
    comment_1 = Comment(comment='Do not forget to separate the darks and lights', task=task_1)
    comment_2 = Comment(comment='Do not forget your reuseable bags this time!', task=task_2)
    comment_3 = Comment(comment='Refer to template used in previous project', task=task_3)
    comment_4 = Comment(comment='Must be completed by no later than 3:00 PM', task=task_4)
    comment_5 = Comment(comment='Must be completed on engineering paper, do not forget.', task=task_5)
    comment_6 = Comment(comment='Attach pre-filled form of information along with email', task=task_6)
    comment_7 = Comment(comment='You got this!', task=task_7)
    comment_8 = Comment(comment='Do not forgot to thaw out the chicken',  task=task_8)
    comment_9 = Comment(comment='Dream big and never settle! Study my heart out and learn as quickly as I can!', task=task_9)

    # Comments for User, Tom
    comment_10 = Comment(comment='Stop at store on the way to get refill for carpet shampoo', task=task_10)
    comment_11 = Comment(comment='Bring all cables with you', task=task_11)
    comment_12 = Comment(comment='Stick with HP and get XL cartidges', task=task_12)
    comment_13 = Comment(comment='Call company to let them know about reset', task=task_13)

    # Comments for User, Elizabeth
    comment_14 = Comment(comment='Must reach out to parents and students when completed', task=task_14)
    comment_15 = Comment(comment='Bring extra jerseys ', task=task_15)
    comment_16 = Comment(comment='Favorite part of my day!', task=task_16)

    db.session.add_all([
        comment_1,
        comment_2,
        comment_3,
        comment_4,
        comment_5,
        comment_6,
        comment_7,
        comment_8,
        comment_9,
        comment_10,
        comment_11,
        comment_12,
        comment_13,
        comment_14,
        comment_15,
        comment_16,
    ])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_comments():
    db.session.execute('TRUNCATE comments CASCADE;')
    db.session.commit()
