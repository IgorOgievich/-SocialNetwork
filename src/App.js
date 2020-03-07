import React from 'react';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigstions/Nav";
import Profile from "./Components/Profile/Profile"
import './App.css';
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}
            <Dialogs/>



        </div>
    );
};


export default App;
