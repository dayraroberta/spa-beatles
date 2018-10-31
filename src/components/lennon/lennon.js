// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button, Helper } from 'react-materialize';
// Importando o componenet UserProfile
import John from '../../images/lennon.jpg';

const Lennon = () => (
  <Row>
    <Row>
      <Col s={6} m={6} offset="s2 m2">
        <img src={John} className="circle responsive-img center-align" />
      </Col>
    </Row>
    <Col m={6} s={6}>

      <Card>
        <div className="center">
          <p className="">John Winston Ono Lennon[1] MBE, nascido John Winston Lennon; (Liverpool, 9 de outubro de 1940 — Nova Iorque, 8 de dezembro de 1980) foi um músico, guitarrista, cantor, compositor, escritor e ativista britânico.
John Lennon foi um dos fundadores da banda britânica The Beatles, em que, junto com Paul McCartney, fez parte de uma das mais importantes duplas de compositores do século XX. Em 1966, conheceu a artista plástica japonesa Yoko Ono, com quem iniciou um relacionamento pessoal, sentimental, artístico e profissional.</p>
        </div>
      </Card>
    </Col>
  </Row>
);

export default Lennon;