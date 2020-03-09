import React from 'react';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigstions/Nav";
import Profile from "./Components/Profile/Profile"
import './App.css';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Nav/>
                <Route exact path="/Profile" component={ Profile}/>
                <Route exact path="/Dialogs" component={ Dialogs}/>
            </div>
        </BrowserRouter>
    );
};


export default App;
