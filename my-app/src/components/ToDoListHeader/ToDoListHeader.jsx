import React from "react";
import "./ToDoListHeader.styling.css"
import sunlogo from "../../images/icon-sun.svg"

const ToDoListHeader=()=>
{
    return(
        <div className="position">
                <h1 className="header">T O D O</h1>
                <img className="sunlogo" src={sunlogo}></img>
        </div>
    );
}
export default ToDoListHeader;