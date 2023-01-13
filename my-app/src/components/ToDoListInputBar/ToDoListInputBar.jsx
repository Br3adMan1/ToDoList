import React, { useState } from 'react'
import ToDoListButton from '../ToDoListButton/ToDoListButton';
import "./ToDoListInputBar.styling.css"


    const ToDoListInputBar=({handleKeyPress,handleChange})=>
    {
        return(
        <div className='bar barPosition'>
            <ToDoListButton></ToDoListButton>
            <input type="text" placeholder="Create a new todo..." onKeyDownCapture={handleKeyPress} onChange={handleChange} className="input"/> 
        </div>
    );
}
export default ToDoListInputBar;