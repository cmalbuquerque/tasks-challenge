import React from "react";
import './Tasks.css';
import { FcApproval } from "react-icons/fc";

function TasksItem(props){
    return <div className="tasksItem">
        <p>{props.id}</p>
        <h4>{props.text}</h4>
        {props.state && <FcApproval/>}
    </div>
}

export default TasksItem;