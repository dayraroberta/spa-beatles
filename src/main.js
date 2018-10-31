import React from "react";
import Home from "./components/home/home";
import Lennon from "./components/lennon/lennon.js";
import McCartney from "./components/mccartney/mccartney.js";
import Harrison from "./components/harrison/harrison.js";
import Starr from "./components/starr/starr.js";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/john-lennon' component={Lennon}/>
        <Route path='/paul-mccartney' component={McCartney}/>
        <Route path='/george-harrison' component={Harrison}/>
        <Route path='/ringo-starr' component={Starr}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;