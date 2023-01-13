import React from "react";
import ToDoListHeader from "../ToDoListHeader/ToDoListHeader";
import "./ToDoListMain.styling.css"
import ToDoListInputBar from "../ToDoListInputBar/ToDoListInputBar";
// import ToDoListItems from "../ToDoListItems/ToDoListItems";
import { useState } from "react";
import ToDoListButton from "../ToDoListButton/ToDoListButton";


const ToDoListMain=()=>
{
    const [todos,setTodos]=useState([]);
    const [value,setvalue]=useState('');
    let counter=0;
    const handleKeyPress=(event)=>
    {
        if(event.key==="Enter")
        {
            const newTodo={ id: counter, title:value};
            const updatedTodos=[...todos,newTodo];
            setTodos(updatedTodos);
            console.log(updatedTodos);
            setvalue('');
        }
    }
    const handleChange=(event)=>
    {
        setvalue(event.target.value);
    }
    return(
        <div className="main">
            <ToDoListHeader></ToDoListHeader>
            <ToDoListInputBar handleKeyPress={handleKeyPress} handleChange={handleChange}></ToDoListInputBar>
            {todos.map((todo)=>
            (
                <div className="listBars barPosition" title={todo.title} key={counter++}>
                    <ToDoListButton></ToDoListButton>
                    {todo.title}
                </div>

            ))}
        </div>
    );
}
// handleKeyPress={handleKeyPress} handleChange={handleChange} value={value}
// todos={todos}
export default ToDoListMain;