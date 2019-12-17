import React from 'react';

export default class TchatConsole extends React.Component{
    constructor(props){
        super(props);
        this.state={
            props:props // pas obligatoire, on enregistre les props

        }
       
    }
    render(){
        return(<div className ="TchatConsole">
           Message reçu
        </div>
        );
    }
}