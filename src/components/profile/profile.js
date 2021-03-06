import React from "react";
import { Row, Col, Card } from 'react-materialize';
import Beatles from '../../images/beatles.jpg';

const Profile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={Beatles} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5>The Beatles</h5>
      </Row>
  </Card>
);

export default Profile;