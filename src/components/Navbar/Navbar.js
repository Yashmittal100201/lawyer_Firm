import Container from 'react-bootstrap/Container';
import { Tabs } from '@mui/material';
import {Link } from "react-router-dom";
import './Navbar.css'
function Nav() {
  return (
      <Tabs sx={{ borderBottom: 1, borderColor: 'divider' }} bg="light" variant="dark" style={{display:"flex"} } centered>
          <Link to='/' className='link'>HOME</Link>
          <Link to='/lawyers' className='link'>LAWYERS</Link>
          <Link to='/contact' className='link'>CONTACT</Link>
      </Tabs>
  );
}

export default Nav;
