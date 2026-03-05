import { useState } from "react";
import API from "../api";

function NoteItem({ note, refreshNotes }) {

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const deleteNote = async () => {
        await API.delete(`/notes/${note.id}`);
        refreshNotes();
    };

    const updateNote = async () => {
        await API.put(`/notes/${note.id}`, {
            title: title,
            content: content
        });

        setIsEditing(false);
        refreshNotes();
    };

    if (isEditing) {
        return (
            <div className="note-card edit-form">

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button onClick={updateNote} style={{ backgroundColor: "#4CAF50", }}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>

            </div>
        );
    }

    return (
        <div className="note-card">

            <h3>{note.title}</h3>
            <p>{note.content}</p>

            <p style={{ fontSize: "12px", color: "gray" }}>
                Created: {new Date(note.created_at).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeZone: "UTC",
                    timeStyle: "short"
                })}
            </p>

            <p style={{ fontSize: "12px", color: "gray" }}>
                Updated: {new Date(note.updated_at).toLocaleString("en-IN", {
                    timeZone: "UTC",
                    dateStyle: "medium",
                    timeStyle: "short"
                })}
            </p>

            <button style={{ margin: "20px" }} onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={deleteNote}>Delete</button>

        </div>
    );
}

export default NoteItem;