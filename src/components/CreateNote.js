import React from "react";
import { useState } from "react";
import '../App.css'
import { HeaderBgContext } from '../App'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateNote(promps) {

      //date states
  const [day, setDay] = useState(() => {
    const date = new Date().getDate();
    return date;
  })

  const [month, setMonth] = useState(() => {
    const monthname = ['Jan', 'Fab', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = new Date().getMonth();
    return monthname[month];

  })

  const [year,setYear]=useState(()=>{
    const year=new Date().getFullYear();
    return year;
  })

    const [note, setNote] = useState({
        title: "",
        content: "",
        day:day,
        month:month,
        year:year
    })




    const [togglelabel, setToggleLabel] = useState(false);

    function showfield() {
        setToggleLabel(true);
    }

    function hidefield() {
        setToggleLabel(false);
        setNote({
            title: "",
            content: ""
        })
    }

    function inputevent(event) {
        const { name, value } = event.target;
        
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }


    function addnote() {
        /* setDay((prev) => {
            const date = new Date().getDate();
            return date;
          })
          setMonth((prev) => {
            const month = new Date().getMonth();
            return month;
          })
          setYear((prev) => {
            const year = new Date().getFullYear();
            return year;
          }) */
                 
        promps.addnote(note);
        setNote({
            title: "",
            content: "",
            day:day,
            month:month,
            year:year
        })


    }


    return (
        <HeaderBgContext.Consumer>
            {(contextpromp) => {
                return (
                    <div className="flex  flex-col items-center my-5" style={{ border: "none" }} >
                        <div className="flex flex-col gap-5 relative shadow-2xl font-semibold max-w-96 min-w-40 notetakebox px-5 py-3 rounded-xl" style={{ boxShadow: contextpromp.boxShadow }}>
                            {togglelabel ? <input type="text"
                                onChange={inputevent}
                                name="title" value={note.title}
                                className="w-full bg-transparent outline-none placeholder-slate-500"
                                placeholder="Title"
                                autoComplete="off" /> : null}
                            <textarea onClick={showfield}
                                onChange={inputevent}
                                name="content"
                                value={note.content}
                                className=" resize-none w-full bg-transparent outline-none placeholder-slate-500"
                                placeholder="Write a note..">
                            </textarea>



                            {togglelabel ? <button className=" self-end mr-10" onClick={hidefield}>
                                close
                            </button> : null}

                            {togglelabel ? <button
                                onClick={addnote}
                                className="Button" style={{
                                    backgroundColor: '#30C1DE',
                                    boxShadow: promps.boxShadow
                                }}>
                                <AddIcon />
                            </button> : null}

                        </div>
                    </div>
                );
            }}

        </HeaderBgContext.Consumer>
    );
}

export default CreateNote