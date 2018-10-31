// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="indigo lighten-2">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="john-lennon">John Lennon</NavLink></li>
      <li><NavLink to="paul-mccartney">Paul McCartney</NavLink></li>
      <li><NavLink to="george-harrison">George Harrison</NavLink></li>
      <li><NavLink to="ringo-starr">Ringo Starr</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;