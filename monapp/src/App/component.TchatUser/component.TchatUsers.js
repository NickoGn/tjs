import React from 'react';
import './component.TchatUser.css';
import Moment from 'moment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    withRouter
  } from "react-router-dom";
import TchatUserDetail from './TchatUserDetail';



function UserTchat(props) {

    return (
        <div className="UserTchat ">
            <li style={{ listStylePosition: "inside", listStyleType: 'none' }}>
            <label >User connecté :</label> <Link to={"/" + props.user.id}>{props.user.name} {props.user.prenom}</Link>
                <ul>
                    <label style={{ fontStyle: 'italic' }} > Dernière connexion :</label> {Moment(props.user.lastConn).fromNow()}
                </ul>
            </li>

        </div>
    )

}

export default class TchatUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            props: props // pas obligatoire, on enregistre les props

        }

    }
    componentDidMount() {
        //?lastConn_gte='+ Moment().add(-10,'m').format()
        fetch(this.state.props.adrserv + '/users')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(jresponse => {
                console.log(jresponse);

                this.setState({ users: jresponse });

            })
            .catch(error => {
                console.error(error);
            });
    }


    render() {
        return (<div className="TchatUsers col-lg-5">
             <Router>
            {


                this.state.users.map((elem, index) => {
                    return (

                        <UserTchat user={elem} key={'userChat' + index} ></UserTchat>);

                })

            }
                <Switch>
                    <Route path="/:id" children={<ChildUser />} />
                </Switch>
            </Router>
        </div>

        );
    }

}

function ChildUser(props)  {
        
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
   
    return (
        <div>
            <h3>Detail du User : {id}</h3>
            <TchatUserDetail idUser={id}></TchatUserDetail>
        </div>
    );
}



