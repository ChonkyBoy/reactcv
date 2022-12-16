import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home.js";
import PortFolio from "./Pages/PortFolio";
import About from "./Pages/About.js"
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Cv from "./Pages/CV";
import Navbar from "./Components/Navbar";

//Fonction
const App = () => {
    return (
        //Fragment - ce qui englobe tout le code
        <Router>
            <Navbar />
            <Switch>
                <Route path="/aboutMe" component={About}/>
                <Route path="/portfolio" component={PortFolio}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/CV" component={Cv}/>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
)
    ;
};

export default App;
