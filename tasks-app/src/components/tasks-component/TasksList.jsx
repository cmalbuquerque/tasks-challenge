import React from "react";
import TasksItem from "./TasksItem";
import './Tasks.css';


function TasksList(props){
    return <div className="tasksList">
        <h3 className="listTitle">{props.type}</h3>
        {props.data.map(item => <TasksItem key={item.id} text={item.text} state={item.completed}/>)}
    </div>
}

export default TasksList;