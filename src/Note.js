import React, { useState } from "react";
import { HeaderBgContext } from "./App";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(promps) {
    function deletitem(){
        promps.deletitem(promps.id);
    }
    return (
        <HeaderBgContext.Consumer>
            {(contextpromp) => {
                return (<div className="flex flex-col relative gap-4 py-6 pl-4 pr-8 pb-10 rounded-lg min-w-28 max-w-60 overflow-auto max-h-80" style={{ boxShadow: contextpromp.boxShadow }}>
                    <h2 className="font-bold mt-2 break-words">{promps.title}</h2>
                    <p className=" absolute p-1 top-0 right-0 text-xs text-slate-500">{promps.month} {promps.day}, {promps.year}</p>
                    <p className=" break-words">{promps.content}</p>
                    
                    <button onClick={deletitem} className="notebutton absolute right-0 bottom-0 text-lg p-2" style={{
                                backgroundColor: '',
                            }}>
                                <DeleteIcon />
                            </button>
                </div>);
            }}
        </HeaderBgContext.Consumer>

    );
}

export default Note;