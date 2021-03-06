import React from "react";
import './Tasks.css';
import { FcApproval } from "react-icons/fc";

function TasksItem(props){
    return <div className="tasksItem" >
        <h4>{props.text} {props.state && <FcApproval size={19} />}</h4>
    
    </div>
}

export default TasksItem;