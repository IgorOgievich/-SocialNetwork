import React from 'react';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigstions/Nav";
import Profile from "./Components/Profile/Profile"
import './App.css';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./Redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">   
                <Header/>
                <Nav/>
                <Route exact path="/Profile" render={ () => <Profile messages = {props.state.messages} />}/>
                <Route exact path="/Dialogs" render={() => <Dialogs message = {props.state.message} name = {props.state.name} />}/>
            </div>
        </BrowserRouter>
    );
};


export default App;
