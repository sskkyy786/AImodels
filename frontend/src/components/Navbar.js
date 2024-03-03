import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#e6e6fa' , margin:'0' }}>
  <a className="navbar-brand" href="#" style={{paddingLeft:'6px' , fontSize:'30px'}}> ATLAN</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
