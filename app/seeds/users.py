from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():

    user1 = User(name='demo', email='demo@demo.com', password='password', pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8rcTb4fY0jzaIGGHgOXlEwNOTYBQq6Le6g&usqp=CAU')
    user2 = User(name='Aliya', email='user3@user3.com', password='password', pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-m-GbsE8FdJ2LkI9mp5lfUFbRBzgm8oShkQ&usqp=CAU')
    user3 = User(name='Elizabeth', email='user4@user4.com', password='password', pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzO_zIsivTHffpD3o463lljxbkZMKsNIfkw&usqp=CAU')

    db.session.add_all([
        user1,
        user2,
        user3,
    ])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
