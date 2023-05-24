import React from "react";
import {Link} from 'react-router-dom'
import { TableRow, TableCell } from "@mui/material";

const Lawyer = (props)=>{

    const {id,name,speciality,phone} = props.details;
    
    return(

        <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{id}</TableCell>
              <TableCell align="right"><Link to={"/lawyers/"+name}  style={{textDecoration: "none", color:"black"}}>{name}</Link></TableCell>
              <TableCell align="right">{speciality}</TableCell>
              <TableCell align="right">{phone}</TableCell>
        </TableRow>
    )
}

export default Lawyer;