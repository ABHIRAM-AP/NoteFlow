import { useEffect, useState } from "react";
import API from "./api";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const res = await API.get("/notes");
        setNotes(res.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="container">

            <h1 className="title">NoteFlow</h1>

            <NoteForm refreshNotes={fetchNotes} />

            <NoteList notes={notes} refreshNotes={fetchNotes} />

        </div>
    );
}

export default App;