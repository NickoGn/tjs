import React from 'react';

import './component.TchatDisplay.css';

import TchatConsole from '../component.TchatConsole/component.TchatConsole';
import TchatInput from '../component.TchatInput/component.TchatInput';

import moment from 'moment';


export default class TchatDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props // pas obligatoire, on enregistre les props

        }

    }
    render() {
        return (<div className="TchatDisplay col-lg-10">
            <div> Nous sommes le {moment().format('MMMM Do YYYY, h:mm:ss a') }</div><br />
            <div className="row">
                <TchatConsole adrserv={this.props.adrserv}></TchatConsole>
                     
                
            </div>
            <TchatInput adrserv={this.props.adrserv}></TchatInput>
        </div>



        );
    }
}