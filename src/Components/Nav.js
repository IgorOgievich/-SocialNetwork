import React from 'react';
import  a from './Nav.module.css';

const Nav = () => {
  return (
    <div className={a.nav}>
        <div className={a.items}> <button> <a> Profile </a> </button> </div>
        <div className={a.items}> <button> <a> Message </a> </button> </div>
        <div className={a.items}> <button> <a> News </a> </button> </div>
        <div className={a.items}> <button> <a> Music </a> </button> </div>
    </div>
  );
};









export default Nav;
