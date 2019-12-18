import React from 'react'
import 'react-bootstrap'
import './component.Navbar.css'
import { Link } from 'react-router-dom'

function Navbar (props) {
    
    return(
        
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Tchat Website</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"> <Link to='/'>Home</Link></li>
                <li> <Link to='/tchat'>Tchat</Link></li>
                <li> <Link to='/users'>Users</Link></li>
                <li></li>
                </ul>
            </div>
            </nav>
      
        
       
    );
}
export default Navbar;