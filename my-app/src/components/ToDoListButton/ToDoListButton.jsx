import React, { useState } from 'react'
import CheckboxImage from  "../../images/icon-check.svg"
import "./ToDoListButton.styling.css"
const ToDoListButton=()=>
{
    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };
    return(
    <div>
        <button className='checkButton' onClick={handleClick} style={{ backgroundColor: active ? " hsl(192, 100%, 67%)" : "hsl(235, 19%, 35%)"}}>
            <img src={CheckboxImage} className="CheckboxImage"></img>
        </button>
    </div>
    );
}
export default ToDoListButton;
