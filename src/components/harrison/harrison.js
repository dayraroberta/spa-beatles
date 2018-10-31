import React from "react";
import { Row, Col, Card, Input, Button } from 'react-materialize';
import George from '../../images/harrison.jpg';

const Harrison = () => (
  <Card>
    <Row>
      <Col s={6} m={6} offset="s2 m2">
        <img src={George} className="circle responsive-img" />
      </Col>
    </Row>
    <Col m={8} s={12}>
      <div>
        <p>George Harrison (Liverpool, 25 de fevereiro de 1943 – Los Angeles, 29 de novembro de 2001) foi um guitarrista, cantor, compositor e produtor musical e cinematográfico inglês que obteve fama internacional como guitarrista dos Beatles. Geralmente chamado de "o Beatle quieto", Harrison aderiu ao hinduísmo e ajudou a ampliar os horizontes dos outros Beatles assim como seu público ocidental ao incorporar instrumentos indianos na música do grupo. Embora a maioria das canções da banda fossem escritas por John Lennon e Paul McCartney, a maioria dos álbuns dos Beatles, a partir de 1965, continham, pelo menos, duas composições de Harrison. Suas músicas para o grupo incluem "Taxman", "Within You Without You", "While My Guitar Gently Weeps", "Here Comes the Sun" e "Something". Esta última se tornou a segunda música mais regravada dos Beatles. </p>
      </div>
    </Col>
  </Card>
);

export default Harrison;