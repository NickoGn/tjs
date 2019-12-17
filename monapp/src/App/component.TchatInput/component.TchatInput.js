import React from 'react';


export default class TchatInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            props:props // pas obligatoire, on enregistre les props

        }
       
    }
    render(){
        return(<div className ="TchatInput">
                <div className="form-group row">
               
                <div class="col-sm-10">
                <input type="text" className="form-control" id="inputTchat" placeholder="message à envoyer" />
                <button type="button" className="btn btn-primary">Envoyer</button>     
                </div>
               
            </div>
            </div>
        );
    }
};