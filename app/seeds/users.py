from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():

    user1 = User(name='Demo', email='demo@demo.com', password='password', pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg_4QMb_SkaPs0XXddwSldTXcgQCi2tdk0w&usqp=CAU')
    user2 = User(name='Tom', email='tom@tom.com', password='password', pic='https://www.dlf.pt/dfpng/middlepng/359-3591655_black-business-user-black-user-icon-hd-png.png')
    user3 = User(name='Elizabeth', email='elizabeth@elizabeth.com', password='password', pic='https://www.pngfind.com/pngs/m/233-2334734_female-female-business-user-icon-hd-png-download.png')

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
