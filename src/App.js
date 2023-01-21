import { useState, useEffect } from "react";
import { nanoid } from "nanoid"
import NotesList from "./Components/NotesList"
import Search from "./Components/Search";
import Header from "./Components/Header";



const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  const [notes, setNotes] = useState([
    {
      text: "this is first note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is second note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is third note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is fourth note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is fifth note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is sixth note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is seventh note",
      id: nanoid(),
      date: "20/01/2023"
    },
    {
      text: "this is eighth note",
      id: nanoid(),
      date: "20/01/2023"
    }
  ])

  const addNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      text: text,
      id: nanoid(),
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !==id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  } ,[notes])


  return(
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search 
          handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default App;