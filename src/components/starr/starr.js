// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import Ringo from '../../images/starr.jpg';

const Starr = () => (
  <Row>
    <Row>
      <Col s={8} m={12} offset="s2 m2">
        <img src={Ringo} className="circle responsive-img" />
      </Col>
    </Row>
    <Col m={8} s={12}>

      <Card>
        <div>
          <p>Richard Starkey, Kt, MBE[1] (Liverpool, 7 de julho de 1940),[2] mais conhecido pelo seu nome artístico Ringo Starr, é um músico, baterista, multi-instrumentista, cantor, compositor e ator britânico, que ganhou fama mundial como baterista dos Beatles após substituir Pete Best, ficando nos Beatles até a separação do grupo em 1970. Quando a banda foi formada em 1960, Starr era membro de outra banda de Liverpool, Rory Storm and the Hurricanes. Além de atuar como baterista, Starr foi intérprete de canções de sucesso dos Beatles (em particular, "With a Little Help from My Friends" e "Yellow Submarine"), como co-autor em "What Goes On" e compôs "Don't Pass Me By" e "Octopus's Garden". </p>
        </div>
      </Card>
    </Col>
  </Row>
);

export default Starr;