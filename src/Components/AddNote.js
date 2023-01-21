import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit-event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if( noteText.trim().length > 0 ){
            handleAddNote(noteText);
            setNoteText('');
        }
        
        
    }
    return(
        <div className="note new">
            <textarea onChange={handleChange} rows="6" cols="10" placeholder="type here ......" />
            <div className="note-footer">
                <small> {characterLimit-noteText.length}reamaning </small>
                <button value={noteText} onClick={handleSaveClick} className="save"> Save </button>
            </div>
        </div>
    )
}
export default AddNote;