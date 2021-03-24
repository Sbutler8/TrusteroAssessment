from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False, unique=False)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)

    task = db.relationship("Task", back_populates="comments")

    def to_dict(self):
        return {
          "id": self.id,
          "title": self.title,
        }
