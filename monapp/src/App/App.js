import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import Navbar from './component.Navbar/component.Navbar'
import User from './component.User/component.User.view'
import Users from './component.User/component.Users';

function App() {
  let _users=JSON.parse('[{"id":1,"nom":"GARNIER","prenom":"Nicolas","serviceId":"1"},{"id":2,"nom":"Test","prenom":"Robert","serviceId":"1"}]'
   );
  return (
    <div className="App">
      <Navbar></Navbar>
      <Users users={_users}></Users>
      <User unUser={{nom:"Bon",prenom:"Jean",serviceId:0}}></User>    
            
    </div>
  );
}

export default App;
