import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState =(props)=>{

    const notesInitial = [
            {
              "_id": "6142e7e39b22b6f3c3249747",
              "user": "6142d8720344786261139d1f",
              "title": "My Title",
              "description": "Complete React Course",
              "tag": "Personal",
              "date": "2021-09-16T06:44:51.380Z",
              "__v": 0
            },
            {
              "_id": "6142e7e39b22b6f3c3249749",
              "user": "6142d8720344786261139d1f",
              "title": "My Title",
              "description": "Complete React Course",
              "tag": "Personal",
              "date": "2021-09-16T06:44:51.884Z",
              "__v": 0
            },
            {
                "_id": "6142e7e39b22b6f3c3249750",
                "user": "6142d8720344786261139d1f",
                "title": "My Title",
                "description": "Complete React Course",
                "tag": "Personal",
                "date": "2021-09-16T06:44:51.380Z",
                "__v": 0
              },
              {
                "_id": "6142e7e39b22b6f3c3249751",
                "user": "6142d8720344786261139d1f",
                "title": "My Title",
                "description": "Complete React Course",
                "tag": "Personal",
                "date": "2021-09-16T06:44:51.884Z",
                "__v": 0
              },
              {
                "_id": "6142e7e39b22b6f3c3249752",
                "user": "6142d8720344786261139d1f",
                "title": "My Title",
                "description": "Complete React Course",
                "tag": "Personal",
                "date": "2021-09-16T06:44:51.380Z",
                "__v": 0
              },
              {
                "_id": "6142e7e39b22b6f3c3249753",
                "user": "6142d8720344786261139d1f",
                "title": "My Title",
                "description": "Complete React Course",
                "tag": "Personal",
                "date": "2021-09-16T06:44:51.884Z",
                "__v": 0
              }
        ]

         const [notes, setNotes] = useState(notesInitial)

         //Add a Note
           const addNote = (title,description,tag)=>{

            console.log("Adding a new note")
            const note= {
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
          const deleteNote = (id)=>{
          console.log("Deleting the note with id"+id);
          const newNotes = notes.filter((note)=>{return note._id!==id})
          setNotes(newNotes)
            
        }

         //Edit a Note
         const editNote = ()=>{

            
        }

    return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
      {props.children}
    </NoteContext.Provider>

    )

}

export default NoteState;