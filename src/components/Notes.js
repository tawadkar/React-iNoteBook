import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem"
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(noteContext);
    const {notes} = context ;  //De-structuring
    return (
        <>
        <AddNote/>
           
        <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{  //note is a variable, you can pass any other value 
           return <Noteitem key={note._id} note={note}/>

        })}
    </div>
    </>
    )
}

export default Notes
