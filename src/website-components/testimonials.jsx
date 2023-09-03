import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CarItem from './CarItem';
import carData from 'data/carData';
export const Testimonials = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
