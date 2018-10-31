import React from "react";
import { Navbar, NavItem, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="yellow accent-4">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="john-lennon">John Lennon</NavLink></li>
      <li><NavLink to="paul-mccartney">Paul McCartney</NavLink></li>
      <li><NavLink to="george-harrison">George Harrison</NavLink></li>
      <li><NavLink to="ringo-starr">Ringo Starr</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;