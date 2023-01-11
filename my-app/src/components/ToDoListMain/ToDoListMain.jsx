import React from "react";
import ToDoListHeader from "../ToDoListHeader/ToDoListHeader";
import "./ToDoListMain.styling.css"
import ToDoListInputBar from "../ToDoListInputBar/ToDoListInputBar";

const ToDoListMain=()=>
{
    return(
        <div className="main">
            <ToDoListHeader></ToDoListHeader>
            <ToDoListInputBar></ToDoListInputBar>
        </div>
    );
}
export default ToDoListMain;