import API from "../api";

function NoteItem({ note, refreshNotes }) {

    const deleteNote = async () => {
        await API.delete(`/notes/${note.id}`);
        refreshNotes();
    };

    return (
        <div className="note-card">

            <h3>{note.title}</h3>
            <p>{note.content}</p>

            <button onClick={deleteNote}>Delete</button>

        </div>
    );
}

export default NoteItem;