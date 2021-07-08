import React from "react";
import TasksItem from "./TasksItem";
import './Tasks.css';
import axios from "axios";


function TasksList(props){

    const [data, setData] = React.useState([]);

    React.useEffect(async () => {
        const result = await axios("http://localhost:3008/api/tasks/");
        setData(result.data);
    }, []);

    return <div className="tasksList">
        <h3 className="listTitle">{props.type}</h3>
        {data.map(item => <TasksItem key={item.id} id={item.id} text={item.text} state={item.completed}/>)};
    </div>
}

export default TasksList;