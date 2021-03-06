import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../profile/profile.js'

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
     <Card>
       <div>
         <p>The Beatles foi uma banda de rock britânica, formada em Liverpool em 1960. É o grupo musical mais bem-sucedido e aclamado da história da música popular. A partir de 1962, o grupo era formado por John Lennon (guitarra rítmica e vocal), Paul McCartney (baixo, piano e vocal), George Harrison (guitarra solo e vocal) e Ringo Starr (bateria e vocal). Enraizada do skiffle e do rock and roll da década de 1950, a banda veio mais tarde a assumir diversos gêneros que vão do folk rock ao rock psicodélico, muitas vezes incorporando elementos da música clássica e outros, em formas inovadoras e criativas. Sua crescente popularidade, que a imprensa britânica chamava de "Beatlemania", fez com que eles crescessem em sofisticação. Os Beatles vieram a ser percebidos como a encarnação de ideais progressistas e sua influência se estendeu até as revoluções sociais e culturais da década de 1960. </p>
       </div>
     </Card>
    </Col>
  </Row>
);

export default Home;