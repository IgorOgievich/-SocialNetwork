import React from 'react';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigstions/Nav";
import Profile from "./Components/Profile/Profile"
import './App.css';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Nav/>
            <Route exact path="/Profile" render={() => <Profile messages={props.state.profilePage.messages}
                                                                dispatch={props.dispatch}
                                                                newPostText={props.newPostText}
            />}/>
            <Route exact path="/Dialogs" render={() => <Dialogs message={props.state.message}
                                                                dispatch={props.dispatch}
                                                                name={props.state.name}
                                                                store={props.store}
            />}/>
            <Route exact path="/Users" render={() => <UsersContainer/>}/>
        </div>
    );
};


export default App;
