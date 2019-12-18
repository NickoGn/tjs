import React from 'react';

// import logo from '../logo.svg';
import './App.css';

import { 
  BrowserRouter as Router,
   Route,   
   Switch
  } from 'react-router-dom'


import Navbar from './component.Navbar/component.Navbar';
import TchatDisplay from './component.TchatDisplay/component.TchatDisplay';
import TchatUsers from './component.TchatUser/component.TchatUsers';


// const _ADR_SRV='https://my-json-server.typicode.com/NickoGn/tjs'

const _ADR_SRV='http://localhost:3210';

function App() {
  // let _users=JSON.parse('[{"id":1,"nom":"GARNIER","prenom":"Nicolas","serviceId":"1"},{"id":2,"nom":"Test","prenom":"Robert","serviceId":"1"}]'
  //  );
  return (
    <div className="App">
      <Router>     
       <Navbar></Navbar>
        <Switch>
            
            {/* <Route path="/users">

            </Route> */}
            <Route path="/tchat">
                <TchatDisplay adrserv={_ADR_SRV}></TchatDisplay>
            </Route>
            
            <Route path="/users">
                <TchatUsers adrserv={_ADR_SRV}></TchatUsers>
            </Route>
            <Route path="/">
                <div className="Home">
                  Bienvenue
                </div>
            </Route>
        </Switch>
      {/*<Users users={_users}></Users>
          <User unUser={{nom:"Bon",prenom:"Jean",serviceId:0}}></User>     */}


      
      </Router>

    </div>
  );
}

export default App;
