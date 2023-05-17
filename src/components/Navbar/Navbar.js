import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link } from "react-router-dom";
import './Navbar.css'
function Nav() {
  return (
      <Navbar bg="light" variant="dark" style={{display:"flex",justifyContent:"center"}}>
          <Link to='/' className='link'>HOME</Link>
          <Link to='/lawyers' className='link'>LAWYERS</Link>
          <Link to='/contact' className='link'>CONTACT</Link>
      </Navbar>
  );
}

export default Nav;