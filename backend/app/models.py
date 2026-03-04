from app.db import db
from datetime import datetime


class Note(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(200),nullable=False)
    content=db.Column(db.Text,nullable=False)
    updated_at=db.Column(db.DateTime,default=datetime.now,onupdate=datetime.now)
    created_at=db.Column(db.DateTime,default=datetime.now)
    