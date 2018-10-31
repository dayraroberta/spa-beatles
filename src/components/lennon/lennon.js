import React from "react";
import { Row, Col, Card, Input, Button, Helper } from 'react-materialize';
import John from '../../images/lennon.jpg';

const Lennon = () => (
  <Card>
    <Row>
      <Col s={6} m={6} offset="s2 m2">
        <img src={John} className="circle responsive-img" />
      </Col>
    </Row>
    <Col m={8} s={12}>
      <div>
        <p>John Winston Ono Lennon, nascido John Winston Lennon; (Liverpool, 9 de outubro de 1940 — Nova Iorque, 8 de dezembro de 1980) foi um músico, guitarrista, cantor, compositor, escritor e ativista britânico. John Lennon foi um dos fundadores da banda britânica The Beatles, em que, junto com Paul McCartney, fez parte de uma das mais importantes duplas de compositores do século XX. Em 1966, conheceu a artista plástica japonesa Yoko Ono, com quem iniciou um relacionamento pessoal, sentimental, artístico e profissional.</p>
      </div>
    </Col>
  </Card>
);


export default Lennon;