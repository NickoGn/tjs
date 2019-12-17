import React from 'react';

// import logo from '../logo.svg';
import './App.css';


import TchatDisplay from './component.TchatDisplay/component.TchatDisplay';




function App() {
  // let _users=JSON.parse('[{"id":1,"nom":"GARNIER","prenom":"Nicolas","serviceId":"1"},{"id":2,"nom":"Test","prenom":"Robert","serviceId":"1"}]'
  //  );
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Users users={_users}></Users>
      <User unUser={{nom:"Bon",prenom:"Jean",serviceId:0}}></User>     */}


      <TchatDisplay></TchatDisplay>


    </div>
  );
}

export default App;
