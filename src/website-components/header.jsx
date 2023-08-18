import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
export const Header = () => {
  return (
    <>
      <div id="carouselExampleTouch" className="carousel slide" data-mdb-touch="false">
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleTouch"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '70%' }}>
            <img src="../img/intro-bg1.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '70%' }}>
            <img src="../img/intro-bg2.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '70%' }}>
            <img src="../img/intro-bg3.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="prev">
          <ChevronLeft fontSize="large" /> {/* Use ChevronLeft icon from Material-UI */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="next">
          <ChevronRight fontSize="large" /> {/* Use ChevronRight icon from Material-UI */}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
