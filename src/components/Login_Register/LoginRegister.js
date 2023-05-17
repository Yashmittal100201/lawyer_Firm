import React from 'react'
import { Link } from 'react-router-dom';
import './LoginRegister.css'
const LoginRegister = (props)=>{
    return (
        <div className='container'>
            <div className='image'>
            <i className='fas fa-user-alt icon'/>
            </div>
            <div className='content'>
                <h5 className='heading'>{props.title}</h5>
                <Link to="/login" style={{borderRight:"1px solid white",color:"white", paddingRight:"10px"}}>Login</Link>
                <Link to="/register"style={{paddingLeft:"10px", color:"white"}}>Register</Link>
            </div>
            
        </div>
    )
}

export default LoginRegister;