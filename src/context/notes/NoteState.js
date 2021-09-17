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
              }
        ]

         const [notes, setNotes] = useState(notesInitial)

    return(
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>

    )

}

export default NoteState;