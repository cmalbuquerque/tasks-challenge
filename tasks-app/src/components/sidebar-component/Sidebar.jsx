import React from "react";
import {Link} from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Sidebar.css'

function createSidebarItem(item, index){
    return <li key={index} className={item.cName}>
        <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
        </Link>
    </li>;
}

function Sidebar(){
    return <div className="sidebar">
        {SidebarData.map(createSidebarItem)}
    </div>;
}

export default Sidebar;