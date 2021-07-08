import React, { useEffect, useState } from "react";
import TasksList from "../components/tasks-component/TasksList";

function Tasks(){
    return (<div className="pageContent"><h2 className="titleSection">Tasks List</h2>
    <div className="boardTasks">
    <TasksList type="To Do" />
    <TasksList type="Completed"/></div>
    
    </div>)
}

export default Tasks;