import React from './node_modules/react';
import './component.TchatDisplay.css';
import { render } from './node_modules/react-dom';

// function ChatDisplay (props) {
//     return (
//         <div className="ChatDisplay">
//             <label htmlFor="message" className="col-sm-2 col-form-label">Message reçu</label>
//             <div className="col-sm-10">
           
//             </div>
//       </div>

//     );
// }

// export default ChatDisplay; 

export default class TchatDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            props:props // pas obligatoire, on enregistre les props

        }
       
    }
    render(){
        return(<div className ="TchatDisplay">
            Hello le Tchat            
        </div>
        
        );
    }
}