import { Link } from "react-router-dom";
import React from "react";



function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Employee Managment System</Link>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/.">Pricing</Link>
          </li>

        </ul>
      </div>
    </nav>

  );
}
export default Navbar;