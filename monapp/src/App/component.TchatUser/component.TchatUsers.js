import React from 'react';
import './component.TchatUser.css';
export default class TchatUsers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            props:props // pas obligatoire, on enregistre les props

        }
       
    }
    render(){
        return(<div className ="TchatUsers">
                Un user
              </div>
        );
    }
}