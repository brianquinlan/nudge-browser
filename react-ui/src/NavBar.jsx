import React from 'react';
import logo from './logoNudge.png';

// function to change menu depending on login status

const NavBar = (props) => {
  // conditionals
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div class="menu"><span>Login</span> | <span>Register</span></div>
    </header>
  );
};

export default NavBar;
