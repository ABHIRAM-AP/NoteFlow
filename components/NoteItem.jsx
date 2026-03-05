import API from "../frontend/src/api"


function NoteItem({ note, refreshNotes }) {
    const deleteNote = async () => {
        await API.delete(`/notes/${note.id}`);
        refreshNotes();
    }

    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>

            <button onClick={deleteNote}>Delete Note</button>
        </div>
    )
}


export default NoteItem;