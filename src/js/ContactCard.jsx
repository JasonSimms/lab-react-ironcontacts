import React, { Component } from 'react'

const ContactCard = props => {
    return (
        <tr>
<td><img src={props.img} alt="" width="50px"/></td>
<td> <h3>{props.name}</h3></td>
<td> <h3>{props.popularity}</h3></td>
        </tr>
    )
}

export default ContactCard
