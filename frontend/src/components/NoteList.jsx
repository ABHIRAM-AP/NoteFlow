import NoteItem from "./NoteItem";

function NoteList({ notes, refreshNotes }) {

    return (
        <div className="notes-grid">

            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    refreshNotes={refreshNotes}
                />
            ))}

        </div>
    );
}

export default NoteList;