import React, { useEffect, useState } from "react";
import TasksList from "../components/tasks-component/TasksList";
import axios from "axios";


function Tasks(){

    const [data, setData] = React.useState([]);

    React.useEffect(async () => {
        const result = await axios("http://localhost:3008/api/tasks/");
        setData(result.data);
    }, []);

    const completedTasks = data.filter(item => item.completed === false);
    const uncompletedTasks = data.filter(item => item.completed === true);

    return (<div className="pageContent"><h2 className="titleSection">Tasks List</h2>
    <div className="boardTasks">
    <TasksList type="To Do" data={completedTasks}/>
    <TasksList type="Completed" data={uncompletedTasks}/></div>
    
    </div>)
}

export default Tasks;