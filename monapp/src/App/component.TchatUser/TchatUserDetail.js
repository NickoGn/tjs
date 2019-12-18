import React from 'react';



export default class TchatUserDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props, // pas obligatoire, on enregistre les props         

        }

    }
    render() {
        return (
            <div>
                Dans le detail user id {this.state.props.idUser}
            </div>
        )
    }

    componentDidMount() {
     
        fetch(this.state.props.adrserv + '/users?id='+ this.state.props.idUser)
            .then(response => {
                console.log(response);
                return response.json();
            }).then(jresponse => {
                console.log(jresponse);

                this.setState({ user: jresponse });

            })
            .catch(error => {
                console.error(error);
            });
    }
}

