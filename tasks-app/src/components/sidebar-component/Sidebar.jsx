import React from "react";
import {Link, useLocation} from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Sidebar.css'


function Sidebar(){
    const location = useLocation().pathname;
    console.log(location);
    return <div className="sidebar">
        {SidebarData.map((item, index) => <li key={index} className={`${item.cName} ${item.path === location ?  "active" : ""}`}>
        <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
        </Link>
    </li>)}
    </div>;
}

export default Sidebar;