import React from 'react';
import './style.css';
import logo from './logo.png';

function Title(props) {
  return (
    <div>
      <h1 className='header fixed-top'>
        {props.children} <img src={logo} alt='logo' />
      </h1>
    </div>
  );
}

export default Title;
