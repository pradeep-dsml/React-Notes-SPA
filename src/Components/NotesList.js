import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote }) => {
    return(
        <div className="notes-list">
            <h2> here are notes</h2>
            {notes.map((note) => {
                return(
                    <Note 
                    text={note.text}
                    id={note.id}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} />
                )
            })}
            <AddNote  handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;