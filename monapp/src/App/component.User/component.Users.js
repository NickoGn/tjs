import React from 'react';

function Users(props) {
    
    
    return (  <table className="table">
        <thead>
            <tr>
                <th>Img</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Service</th>
            </tr>
            
        </thead>
        <tbody>
            {
                props.users.map((e,i,l)=>{
                   return( <tr key={'lign-user'+ e.id}>
                    <td></td>
                    <td>{e.prenom}</td>
                    <td>{e.nom}</td>
                    <td>{e.serviceId}</td>
                    </tr>)
                })
            }
           
        </tbody>
    </table>)
    
}
export default Users;