import React from 'react';
import 'react-bootstrap'

/**
 * 
 * @param {Object} props 
 */
function User(props) {
    console.log(props)
    return (<div className="User">
        <div className="user-img">

            <img src="#" className="img-responsive" alt="Image"></img>

        </div>
        <div className="user-data">
            Nom:<span className="user-nom">{props.unUser.nom && props.unUser.nom }</span><br /> {/**Pour blinder l'absence de nom */}
            Prénom:<span className="user-prenom">{props.unUser.prenom}</span><br />
            Service:<span className="user-service">{props.unUser.serviceId}</span><br />
        </div>
    </div>)
}

export default User;    