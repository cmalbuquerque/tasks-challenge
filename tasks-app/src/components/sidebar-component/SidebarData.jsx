import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome/>,
        cName: 'item-text',
    },
    {
        title: 'Tasks List',
        path: '/tasks',
        icon: <BsCardChecklist/>,
        cName: 'item-text',
    }
]