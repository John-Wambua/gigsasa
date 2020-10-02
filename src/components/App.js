import React from "react";
import {
    Router,
    Route,
    Switch
} from "react-router-dom"

import history from "../history";
import Demo from "./Demo";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {Zoom} from "react-reveal";

const App = ()=>{
    return(
        <div className={"container-fluid"}>

            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/demo"} exact component={Demo}/>
                </Switch>
                <Footer/>
            </Router>

        </div>
    )
}
export default App