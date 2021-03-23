from .db import db

class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates="lists")
    tasks = db.relationship("Task", back_populates="to_do_list")

    def to_dict(self):
        return {
          "id": self.id,
          "title": self.title,
        }
