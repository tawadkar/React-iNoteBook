import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState =(props)=>{

    const s1 = {

        "name": "Jeff",
        "class":"5b"
    }

     const [state, setstate] = useState(s1);
     const update =()=>{
       setTimeout(() => {

        setstate({
            "name": "Warren",
            "class":"10b"

        })
           
       }, 1000);

     }

    return(
    <NoteContext.Provider value={{state:state,update:update}}>
      {props.children}
    </NoteContext.Provider>

    )

}

export default NoteState;