import React from "react";
import Sidebar from "./components/sidebar-component/Sidebar";
import Title from "./Title";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App(){
    return <div>
        <Title />
        <div>
            <Router>
            <Sidebar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tasks" component={Tasks} />
            </Switch>
        </Router>
        </div>
        <div>

        </div>
        
    </div>
}

export default App;