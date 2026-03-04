from flask import Flask
from flask_cors import CORS
from app.db import db
from app.routes.routes import note_routes

app =Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///notes.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

CORS(app)

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(note_routes)



if __name__ == "__main__":
    app.run(debug=True)