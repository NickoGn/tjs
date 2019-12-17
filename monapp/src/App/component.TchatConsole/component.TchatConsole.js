import React from 'react';


function Message(props) {
    return (
        <div className="message">
            <div className="user">
                Message de {props.message.userId}:{props.message.user.name}
            </div>
            <div className="messageText">

                {props.message.message}
            </div>
        </div>
    );
}

export default class TchatConsole extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }

    }
    render() {
        return (<div className="TchatConsole">
            <Message message={this.state.messages}>
            </Message>
        </div>
        );
    }
}

// {
//     message: "Salut!",
//     userId: 0,
//     date :'2019-12-17',
//     user: {
//         name: "John",
//         id:0
//     }
// }