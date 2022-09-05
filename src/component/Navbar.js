import React from 'react'
// import { Outlet, Link } from "react-router-dom";
// import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>Home</a>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/about">About</a> */}
        </li>
      </ul>
    </div>
    <button type="button" className="btn btn-primary" onClick={props.togglemode}> Enable {props.mode==='light'?'dark':'light'}Mode </button>

  </div>
</nav>
{/* <Outlet /> */}
      
    </>
  )
}
