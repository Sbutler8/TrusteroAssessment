from werkzeug.security import generate_password_hash
from app.models import db, User, List


def seed_lists():

    demo = User.query.filter(User.name == 'Demo').first()
    tom = User.query.filter(User.name == 'Tom').first()
    elizabeth = User.query.filter(User.name == 'Elizabeth').first()

    home_1 = List(title='Home', user=demo)
    work_1 = List(title='Work', user=demo)
    school_1 = List(title='School', user=demo)
    health_1 = List(title='Health', user=demo)
    other_1 = List(title='Bucket List', user=demo)

    home_2 = List(title='Home', user=tom)
    work_2 = List(title='Work', user=tom)
    miscellaneous_2 = List(title='Miscellaneous', user=tom)

    work_3 = List(title='Work', user=elizabeth)
    sports_3 = List(title='Sports', user=elizabeth)
    random_3 = List(title='Random', user=elizabeth)


    db.session.add_all([
        home_1,
        work_1,
        school_1,
        health_1,
        other_1,
        home_2,
        work_2,
        miscellaneous_2,
        work_3,
        sports_3,
        random_3,
    ])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_lists():
    db.session.execute('TRUNCATE lists CASCADE;')
    db.session.commit()
