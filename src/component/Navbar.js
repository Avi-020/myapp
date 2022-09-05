import React from 'react'
import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>
    </div>
    <button type="button" className="btn btn-primary" onClick={props.togglemode}> Enable {props.mode==='light'?'dark':'light'}Mode </button>

  </div>
</nav>
<Outlet />
      
    </>
  )
}
