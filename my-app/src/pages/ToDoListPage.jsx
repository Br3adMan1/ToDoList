import React from "react";
import"./ToDoListPage.styling.css";
import ToDoListMain from "../components/ToDoListMain/ToDoListMain";



const ToDoListPage=()=>
{
    return(
    <div>
        <div className="desktopDark">
            <ToDoListMain></ToDoListMain>
        </div>
    </div>
    );
}
export default ToDoListPage;