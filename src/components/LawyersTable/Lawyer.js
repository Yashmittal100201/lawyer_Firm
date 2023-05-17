import React from "react";
import {Link} from 'react-router-dom'

const Lawyer = (props)=>{
    const {id,name,speciality,phone} = props.details;

    return(
        <tr >
            <td>{id}</td>
            <td><Link style={{textDecoration: "none", color:"black"}}>{name}</Link></td>
            <td>{speciality}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default Lawyer; 