import React from 'react';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigstions/Nav";
import Profile from "./Components/Profile/Profile"
import './App.css';

const App = () => {
  return (
    <div className="app">
        <Header/>
        <Nav/>
        {/*<Profile/>*/}
        <Dialogs />


    </div>
  );
};









export default App;
