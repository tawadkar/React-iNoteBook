import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  

  const [notes, setNotes] = useState(notesInitial)

  //Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmQ4NzIwMzQ0Nzg2MjYxMTM5ZDFmIn0sImlhdCI6MTYzMTc3MDczOH0.FYvR9L9GhGri4k0MP5eTnO1eQdOrndXwukW_JJlfUtc'
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmQ4NzIwMzQ0Nzg2MjYxMTM5ZDFmIn0sImlhdCI6MTYzMTc3MDczOH0.FYvR9L9GhGri4k0MP5eTnO1eQdOrndXwukW_JJlfUtc'

      },

      body: JSON.stringify({title,description,tag})                 // body data type must match "Content-Type" header
    });

    const json = response.json();
    console.log(json)
    
    console.log("Adding a new note")
    const note = {
      "_id": "6142e7e39b22b6f3c3249747",
      "user": "6142d8720344786261139d1f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-16T06:44:51.380Z",
      "__v": 0
    };
    setNotes(notes.concat(note))   //concat returns and array whereas push updates an array

  }

  //Delete a Note
    const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmQ4NzIwMzQ0Nzg2MjYxMTM5ZDFmIn0sImlhdCI6MTYzMTc3MDczOH0.FYvR9L9GhGri4k0MP5eTnO1eQdOrndXwukW_JJlfUtc'

      },     
    });

    const json = response.json();
      console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }

  //Edit a Note
  const editNote = async(id, title, description, tag) => {
      //API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmQ4NzIwMzQ0Nzg2MjYxMTM5ZDFmIn0sImlhdCI6MTYzMTc3MDczOH0.FYvR9L9GhGri4k0MP5eTnO1eQdOrndXwukW_JJlfUtc'

        },

        body: JSON.stringify({title,description,tag})                 // body data type must match "Content-Type" header
      });
      const json = await response.json();
      console.log(json)                                             // parses JSON response into native JavaScript objects

      
      let newNotes = JSON.parse(JSON.stringify(notes))  //deep copy
      //Logic to edit in client
      
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
         
        }
         
        setNotes(newNotes);

  }

  

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes}}>
      {props.children}
    </NoteContext.Provider>

  )

}

export default NoteState;