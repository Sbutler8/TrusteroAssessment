from .db import db

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False, unique=False)
    description = db.Column(db.Text, nullable=True, unique=False)
    status = db.Column(db.Boolean, nullable=False, unique=False, default=False)
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id'), nullable=False)

    to_do_list = db.relationship("List", back_populates="tasks")
    comments = db.relationship("Comment", back_populates="task")


    def to_dict(self):
        return {
          "id": self.id,
          "title": self.title,
          "description": self.description,
          "status": self.status,
          "list_id": self.list_id,
        }
