
import noteContext from "../context/notes/noteContext";
import React,{useContext,useState} from "react";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context ;
    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();   //This will prevent page from loading
       addNote(note.title,note.description,note.tag);

    }

    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})   // ...note means keep the previous value as it is , e.target.name>> set its value to new entered values

    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control"  id="description" name="description"  onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control"  id="tag" name="tag"  onChange={onChange} />
                </div>


                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
