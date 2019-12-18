import React from 'react';
import ReactModal from 'react-modal';

import moment from 'moment';



export default class TchatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props, // pas obligatoire, on enregistre les props
            showModal: false,
            modalMessage:"",

        }
        ReactModal.setAppElement('#root');
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    sendMessage() {
             
        this.setState( { modalMessage: "Message en cours d'envoi" });
        let _xhr = new XMLHttpRequest();
        let message = { date: moment().format(), message: this.state.message, userId: 0 }
        console.log(message);
        _xhr.open('POST', this.state.props.adrserv + '/publicDiscussions');
        _xhr.setRequestHeader("Content-type", "application/json");
        _xhr.onreadystatechange = (response) => {

            if (response.target.readyState < XMLHttpRequest.DONE && response.target.status >= 200 && response.target.status < 300) {
                console.log(response);
                this.handleOpenModal();
                // this.handleCloseModal();
                return;
            }
            else {
                console.log("une erreur est survenu lors de l'envoi du message");  
                this.setState( { modalMessage: "Une erreur est survenu lors de l'envoi du message" });        
                this.handleOpenModal();    
            }


        }
        _xhr.send(JSON.stringify(message));

    }
    render() {
        return (<div className="TchatInput">
            <div className="form-group row">

                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputTchat" placeholder="message à envoyer" onChange={(event) => {

                        console.log({ message: event.target.value })
                        this.setState({ message: event.target.value });
                    }


                    } value={this.state.message} />
                    <button type="button" className="btn btn-primary" onClick={
                        (event) => {
                            this.sendMessage();
                        }
                    }>Envoyer</button>
                </div>

            </div>
            <ReactModal isOpen={this.state.showModal}   shouldCloseOnOverlayClick={false}  contentLabel="onRequestClose Example"    onRequestClose={this.handleCloseModal}  >
                <p>{this.state.modalMessage}</p>
                <button  type="button" className="btn btn-secondary" onClick={this.handleCloseModal}>Fermer</button>
            </ReactModal>
        </div>
           
           
        )
    }
};