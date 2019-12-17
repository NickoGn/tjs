import React from 'react'
import 'react-bootstrap'
import './component.Navbar.css'

function Navbar (props) {
    
    return(
        
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="#" alt="navbar">Title</a>
            <ul className="nav navbar-nav">
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
            </ul>
        </nav>
        
       
    );
}
export default Navbar;