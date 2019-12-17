import React from 'react';

import './component.TchatDisplay.css';

import TchatConsole from '../component.TchatConsole/component.TchatConsole';
import TchatInput from '../component.TchatInput/component.TchatInput';
import TchatUsers from '../component.TchatUser/component.TchatUsers';


export default class TchatDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            props:props // pas obligatoire, on enregistre les props

        }
       
    }
    render(){
        return(<div className ="TchatDisplay">
              
            <TchatConsole></TchatConsole>  
            <TchatInput></TchatInput> 
            <TchatUsers>    </TchatUsers>
                
        </div>
        
        );
    }
}