import React from 'react';
import a from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={a.nav}>
            <div className={a.items}>
                <NavLink to="/Profile" activeClassName={a.active}>
                    <button> Profile</button>
                </NavLink>
            </div>
            <div className={a.items}>

                <NavLink to="/Dialogs" activeClassName={a.active}>
                    <button> Message</button>
                </NavLink>
            </div>
            <div className={a.items}>

                <button> News </button>
            </div>
            <div className={a.items}>
                <NavLink to="/Login" activeClassName={a.active}>
                    <button> Login </button>
                </NavLink>
            </div>
            <div className={a.items}>
                <NavLink to="/Users" activeClassName={a.active}>
                    <button> Users </button>
                </NavLink>
            </div>
        </div>
    );
};


export default Nav;
