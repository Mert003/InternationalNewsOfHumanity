import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../logo.png" ;
export default function NewsNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><img src={logo} width={100} /></Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/general">General</Link>
        </li>
        
        <li>
          <Link to="/business">Business</Link>
        </li>
        
        <li>
          <Link to="/sport">Sports</Link>
        </li>
       
        <li>
          <Link to="/health">Health</Link>
        </li>

        
      </ul>
    </nav>
  );
}

