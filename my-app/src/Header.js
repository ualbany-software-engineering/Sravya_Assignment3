import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addition from './Addition';
import Static from './Static';
import App from './App';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './Header.css';
export default function Header() {
  return (
    <div> 
    <Router>
      <div className="App">
      <div className="navbar">
          <div className="logo">Exploring React</div>
           <ul className="nav-links">
              <Link to = "/">Home</Link>
              <Link to="/Addition">Addition</Link>
              <Link to="/App">Newsfeed</Link>
              <Link to="/Static">Static Page</Link>
           </ul>
        </div>

        <Routes>
            <Route path = "/" element  = {        <p>Use the Above Header to move across the Application</p>
}/>
          <Route path="/Addition" element ={<Addition/>} />
          <Route path="/App" element ={<App/>} />
          <Route path="/Static" element ={<Static/>} />
        </Routes>
      </div>
    </Router>
   
    </div>
  )
}
