import React, { useContext, useEffect, useState,useRef } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useHistory } from 'react-router';


const Notes = (props) => {
    const context = useContext(noteContext);
    let history  = useHistory();
    const { notes, getNotes,editNote } = context;  //De-structuring
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            history.push("/login");
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id:"",mtitle:"",mdescription:"",mtag:""})
    
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,mtitle: currentNote.title, mdescription: currentNote.description, mtag: currentNote.tag})
        
    }


    const handleClick = (e)=>{
       console.log("Updating the note...",note);
       editNote(note.id,note.mtitle,note.mdescription,note.mtag)
       refClose.current.click();
       props.showAlert("Updated Successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})   // ...note means keep the previous value as it is , e.target.name>> set its value to new entered values

    }
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Note</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="mtitle" name="mtitle" value={note.mtitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="mdescription" name="mdescription" value={note.mdescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="mtag" name="mtag" value={note.mtag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button disabled={note.mtitle.length<5 || note.mdescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className ="container">
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {  //note is a variable, you can pass any other value 
                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />

                })}
            </div>
        </>
    )
}

export default Notes
