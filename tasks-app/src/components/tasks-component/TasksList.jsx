import React from "react";
import TasksItem from "./TasksItem";
import './Tasks.css';


function TasksList(props){
    return <div className="tasksList">
        <div className="listTitle">
            <h3>{props.type}</h3>
            <p>{props.data.length}</p>
        </div>
        {props.data.map(item => <TasksItem key={item.id} text={item.text} state={item.completed}/>)}
    </div>
}

export default TasksList;