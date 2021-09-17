import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem"

const Notes = () => {
    const context = useContext(noteContext);
    const {notes,setNotes} = context ;  //De-structuring
    return (
        <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{  //note is a variable, you can pass any other value 
           return <Noteitem note={note}/>

        })}
    </div>
    )
}

export default Notes
