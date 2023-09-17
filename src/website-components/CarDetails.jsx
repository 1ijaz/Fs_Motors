import React from 'react';
import carData from '../data/carData.js';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactCardSlider from 'react-card-slider-component';
const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);
  const sliderClick = () => {
    alert('hello world');
  };
  const slides = [
    { image: 'https://picsum.photos/200/300', title: 'This is a title', description: 'This is a description', clickEvent: sliderClick },
    {
      image: 'https://picsum.photos/600/500',
      title: 'This is a second title',
      description: 'This is a second description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/700/600',
      title: 'This is a third title',
      description: 'This is a third description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/500/400',
      title: 'This is a fourth title',
      description: 'This is a fourth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'This is a fifth title',
      description: 'This is a fifth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/800/700',
      title: 'This is a sixth title',
      description: 'This is a sixth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/300/400',
      title: 'This is a seventh title',
      description: 'This is a seventh description',
      clickEvent: sliderClick
    }
  ];

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {/* Main Image */}
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">${singleCarItem.price}.00 / Day</h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: '#f9a826' }}>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">{singleCarItem.description}</p>

                <div className=" d-flex align-items-center mt-3" style={{ columnGap: '4rem' }}>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="fa fa-car" style={{ color: '#f9a826' }}></i> {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="fa fa-gear" style={{ color: '#f9a826' }}></i> {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="fa fa-gauge" style={{ color: '#f9a826' }}></i> {singleCarItem.speed}
                  </span>
                </div>

                <div className=" d-flex align-items-center mt-3" style={{ columnGap: '2.8rem' }}>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="fa fa-location-dot" style={{ color: '#f9a826' }}></i> {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="fa fa-chair" style={{ color: '#f9a826' }}></i> {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="fa fa-car" style={{ color: '#f9a826' }}></i> {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Gallery Slider */}
      <section>
        <Col lg="12">
          <div id="body">
            <ReactCardSlider slides={slides} />
          </div>
        </Col>
      </section>
    </>
  );
};

export default CarDetails;
