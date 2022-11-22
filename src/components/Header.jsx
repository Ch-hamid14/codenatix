import React from 'react';
import {HashLink} from 'react-router-hash-link';
function Header(props) {
  return (
    <nav>
        <h1>{props.name}</h1>
        <main>
        <HashLink to="/#">Home</HashLink>
        <HashLink to="/contact">Contact</HashLink>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#brands">Available</HashLink>
        <HashLink to="/services">Provider</HashLink>
        </main>
    </nav>
  )
}

export default Header;