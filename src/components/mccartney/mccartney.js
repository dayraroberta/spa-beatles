// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import Paul from '../../images/mccartney.jpeg';

const McCartney = () => (
  <Row>
    <Row>
      <Col s={8} m={12} offset="s2 m2">
        <img src={Paul} className="circle responsive-img" />
      </Col>
    </Row>
    <Col m={8} s={12}>

      <Card>
        <div>
          <p>James Paul McCartney Kt, MBE (Liverpool, 18 de junho de 1942) é um cantor, compositor, multi-instrumentista, empresário, produtor musical, cinematográfico e ativista dos direitos dos animais britânico. McCartney alcançou fama mundial como membro da banda de rock britânica The Beatles, com John Lennon, George Harrison e Ringo Starr. Lennon e McCartney foram uma das mais influentes e bem sucedidas parcerias musicais de todos os tempos, "escrevendo as canções mais populares da história do rock".[1] Após a dissolução dos Beatles em 1970, McCartney lançou-se numa carreira solo de sucessos, formou uma banda com sua primeira mulher Linda McCartney, os Wings. Ele também trabalhou com música clássica, eletrônica e trilhas sonoras. </p>
        </div>
      </Card>
    </Col>
  </Row>
);

export default McCartney;