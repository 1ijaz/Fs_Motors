import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { Carfilter } from 'website-components/carfilter';
import { Services } from 'website-components/services';
import { Gallery } from 'website-components/gallery';
import { Footer } from 'website-components/footer';
import { WorkFlow } from 'website-components/workFlow';
import { Testimonials } from 'website-components/testimonials';
import { Features } from 'website-components/features';
import JsonData from '../data/data.json';
import { NewsEvents } from './news-events';
import HeroSlider from './HeroSlider';
import FindCarForm from './FindCarForm';
export const Header = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../img/intro-bg1.jpg" className="d-block w-100 img-fluid img-lg-height" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../img/intro-bg2.jpg" className="d-block w-100 img-fluid img-lg-height" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../img/intro-bg3.jpg" className="d-block w-100 img-fluid img-lg-height " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Carfilter /> */}
      <Gallery data={landingPageData.Gallery} />
      <WorkFlow data={landingPageData.workFlowVideo} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <NewsEvents />
      <Testimonials data={landingPageData.Testimonials} />

      <Footer />
    </>
  );
};
