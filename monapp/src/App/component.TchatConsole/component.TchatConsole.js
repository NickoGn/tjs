import React from 'react';
import Moment from 'moment';



function Message(props) {
    return (
        <div className="message col">

            <div className="user" style={{ width: '200px', textAlign: "center" }}>
                Message de {props.message.user.name} {props.message.userId} reçu le {Moment(props.message.date).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            <div className="messageText" style={{ backgroundColor: "lightgrey", fontStyle: "italic" }} >
                {props.message.message}
            </div>
        </div>
    );
}



export default class TchatConsole extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            props: props
        }

    }
    componentDidMount() {
        this.Interval = setInterval(() => {
            let _dateTime = Moment().add(-60, 'm').format()
            fetch(this.state.props.adrserv + '/publicDiscussions?_expand=user&_sort=date&date_lte=' + Moment().format() + '&date_gte=' + _dateTime + '&_limit=40')
                .then(response => {
                    console.log(response);
                    return response.json();
                }).then(jresponse => {
                    console.log(jresponse);
                    this.setState({ messages: jresponse });
                })
                .catch(error => {
                    console.error(error);
                })
        }, 1800)

    }
    componentWillUnmount() {
        clearInterval(this.Interval);
    }

    render() {
        return (<div className="TchatConsole col-lg-6  ">
            {
                this.state.messages.map((elem, index) => {
                    return (<Message message={elem} key={'message' + index}>
                    </Message>)
                })

            }
        

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