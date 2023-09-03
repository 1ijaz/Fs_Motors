import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const NewsEvents = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src="../img/toyota-offer-2.png" alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">Do You Want to Earn With Us? So Do not Be Late</h2>

            <button className="btn btn-primary w-40">Search</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
