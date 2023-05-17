import React from 'react'
import Nav from '../Navbar/Navbar';
import Logo from './logo.png'
import './Header.css'
import LoginRegister from '../Login_Register/LoginRegister';
const Header = () =>{

    return (
        <div className='header'>
            <div className='headerInnerContainer'>
                <div className='logoContainer'>
                    <img
                        alt=""
                        src={Logo}
                        className="d-inline-block align-top"
                        />
                </div>
                <div className='loginAndRegister'>
                    <div className='userLoginAndRegister'>
                        <LoginRegister title="User"/>
                        <LoginRegister title="Lawyer"/>

                    </div>
                </div>
            </div>
            <Nav/>
        </div>
    )
}
export default Header;