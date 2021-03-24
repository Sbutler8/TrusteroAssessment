from werkzeug.security import generate_password_hash
from app.models import db, User, List, Task


def seed_tasks():

    home_1 = List.query.join(User).filter(User.name == 'Demo').filter(List.title == 'Home').first()
    work_1 = List.query.join(User).filter(User.name == 'Demo').filter(List.title == 'Work').first()
    school_1 = List.query.join(User).filter(User.name == 'Demo').filter(List.title == 'School').first()
    health_1 = List.query.join(User).filter(User.name == 'Demo').filter(List.title == 'Health').first()
    bucketlist_1 = List.query.join(User).filter(User.name == 'Demo').filter(List.title == 'Bucket List').first()

    home_2 = List.query.join(User).filter(User.name == 'Tom').filter(List.title == 'Home').first()
    work_2 = List.query.join(User).filter(User.name == 'Tom').filter(List.title == 'Work').first()
    miscellaneous_2 = List.query.join(User).filter(User.name == 'Tom').filter(List.title == 'Miscellaneous').first()

    work_3 = List.query.join(User).filter(User.name == 'Elizabeth').filter(List.title == 'Work').first()
    sports_3 = List.query.join(User).filter(User.name == 'Elizabeth').filter(List.title == 'Sports').first()
    random_3 = List.query.join(User).filter(User.name == 'Elizabeth').filter(List.title == 'Random').first()

    # Tasks for User, Demo
    task_1 = Task(title='Laundry', description='Finish all laundry', to_do_list=home_1)
    task_2 = Task(title='Grocery Shopping', description='Pick up milk and eggs', status=True, to_do_list=home_1)
    task_3 = Task(title='Documentation', description='Finish hardware build instructions, amd supplemental user documentation', status=True, to_do_list=work_1)
    task_4 = Task(title='Time Cards', description='Submit all updated time cards for employees', to_do_list=work_1)
    task_5 = Task(title='Science', description='Complete Physics homework', to_do_list=school_1)
    task_6 = Task(title='Email', description='Email science teacher for letter of reference', to_do_list=school_1)
    task_7 = Task(title='Workout', description='Leg day at the gym', to_do_list=health_1)
    task_8 = Task(title='Meal Prep', description='Prepare lunches for the following week', status=True, to_do_list=health_1)
    task_9 = Task(title='Job', description='Get hired at Trustero as their next Software Engineer', status=True, to_do_list=bucketlist_1)
    task_10 = Task(title='Lifestyle', description='Build great long lasting relationships that inspire me to be better ever day', to_do_list=bucketlist_1)

    # Tasks for User, Tom
    task_11 = Task(title='Clean', description='Clean all of the bathrooms and floors', status=True, to_do_list=home_2)
    task_12 = Task(title='Laundry', description='Finish all laundry', to_do_list=home_2)
    task_13 = Task(title='Car', description='Get the oil changed in my car', status=True, to_do_list=home_2)
    task_14 = Task(title='Returns', description='Return monitor, mouse, and keyboard to HR', to_do_list=work_2)
    task_15 = Task(title='Paperwork', description='Finish onboarding for new job', to_do_list=work_2)
    task_16 = Task(title='Clock Out', description='Clock Out!', status=True, to_do_list=work_2)
    task_17 = Task(title='Printer', description='Order new printer along with extra cartidges', status=True, to_do_list=work_2)
    task_18 = Task(title='Dogs', description='Give the dogs a bath', to_do_list=miscellaneous_2)
    task_19 = Task(title='Cat', description='Give the cat her allergy medication', to_do_list=miscellaneous_2)
    task_20 = Task(title='Home', description='Reset alarm code', status=True, to_do_list=miscellaneous_2)

    # Tasks for User, Elizabeth
    task_21 = Task(title='Attendence', description='Update rosters for attendance', to_do_list=work_3)
    task_22 = Task(title='Grades', description='Insert and finalize grades for all 10th graders', to_do_list=work_3)
    task_23 = Task(title='Soccer', description='Coach soccer game this Saturday', to_do_list=sports_3)
    task_24 = Task(title='Softball', description='Game this Sunday!', status=True, to_do_list=sports_3)
    task_25 = Task(title='Practice', description='Go to batting cages to practice swing', status=True, to_do_list=sports_3)
    task_26 = Task(title='Pets', description='Walk the dogs', to_do_list=random_3)

    db.session.add_all([
        task_1,
        task_2,
        task_3,
        task_4,
        task_5,
        task_6,
        task_7,
        task_8,
        task_9,
        task_10,
        task_11,
        task_12,
        task_13,
        task_14,
        task_15,
        task_16,
        task_17,
        task_18,
        task_19,
        task_20,
        task_21,
        task_22,
        task_23,
        task_24,
        task_25,
        task_26,
    ])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_tasks():
    db.session.execute('TRUNCATE tasks CASCADE;')
    db.session.commit()
