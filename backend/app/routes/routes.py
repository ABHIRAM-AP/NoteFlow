from flask import Blueprint,request,jsonify
from app.models import Note
from app.db import db

note_routes = Blueprint('note_routes',__name__)

@note_routes.route('/notes',methods=["GET"])
def get_notes():
    notes=Note.query.all()

    result=[]

    for note in notes:
        result.append({
            "id":note.id,
            "title":note.title,
            "content":note.content,
            "updated_at":note.updated_at,
            "created_at":note.created_at,
        })
    return jsonify(result)
    
@note_routes.route('/notes',methods=["POST"])
def create_note():
    data = request.json
    new_note=Note(
        title=data["title"],
        content=data["content"]
    )

    db.session.add(new_note)
    db.session.commit()

    return jsonify({"message":"Note Created"})


@note_routes.route("/notes/<int:id>", methods=["DELETE"])
def delete_note(id):

    note = Note.query.get(id)

    if not note:
        return jsonify({"error": "Note not found"}), 404

    db.session.delete(note)
    db.session.commit()

    return jsonify({"message": "Note Deleted"})


@note_routes.route('/notes/<int:id>',methods=["PUT"])
def update_note(id):

    data = request.get_json()
    note=Note.query.get(id)

    if not note:
        return jsonify({"error": "Note not found"}), 404
    
    note.title=data["title"]
    note.content=data["content"]
    db.session.commit()

    return jsonify({"message": "Note updated"})

