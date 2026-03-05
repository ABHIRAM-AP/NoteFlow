import { useState } from "react";
import API from "../api";

function NoteForm({ refreshNotes }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await API.post("/notes", {
            title,
            content
        });

        setTitle("");
        setContent("");

        refreshNotes();
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Write a note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button type="submit">Add Note</button>

        </form>
    );
}

export default NoteForm;