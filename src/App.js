import React from 'react';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigstions/Nav";
import Profile from "./Components/Profile/Profile"
import './App.css';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import Login from "./Components/Login/Login";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Nav/>
            {/*<Route exact path="/Profile" render={() => <Profile/>}/>*/}
            {/*<Route exact path="/Dialogs" render={() => <Dialogs/>}/>*/}
            <Route exact path="/Users" render={() => <UsersContainer/>}/>
            <Route exact path="/Login" render={() => <Login/>}/>
        </div>
    );
};


export default App;
