from flask.cli import AppGroup
from .users import seed_users, undo_users
from .lists import seed_lists, undo_lists
from .tasks import seed_tasks, undo_tasks
from .comments import seed_comments, undo_comments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_lists()
    seed_tasks()
    seed_comments()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_lists()
    undo_tasks()
    undo_comments()
