import React, { useState } from 'react'
import "./ToDoListInputBar.styling.css"
import CheckboxImage from  "../../images/icon-check.svg"

const ToDoListInputBar=()=>
{
    const [input,setinput]=useState("");
    return(
        <div className='bar barPosition'>
            <button>
                <img src={CheckboxImage} className="CheckboxImage"></img>
            </button>
            <input type="text" placeholder="Create a new todo..."  className="input"/> 
        </div>
    );
}
export default ToDoListInputBar;