import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useState } from 'react';
import photos from './photos';
export const Carfilter = () => {
  // function handleSearchClick() {
  //   setIndex(1);
  // }
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div id="portfolio" className="text-center">
        <div className="container mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4 text-center" style={{ backgroundColor: '#454056' }}>
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2 style={{ color: '#fff' }}>Find the New & Used Car</h2>
              <p style={{ color: '#fff' }}>With thousands of cars, we have just the right one for you</p>
            </div>
          </div>
          <ul className="nav nav-tabs nav-tabs-light mb-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Used
              </a>
            </li>
          </ul>

          <form className="form-group form-group-light d-block">
            <div className="row g-0 ms-lg-n2">
              <div className="col-lg-2">
                <div className="input-group border-end-lg border-light">
                  <span className="input-group-text text-muted ps-2 ps-sm-3">
                    <i className="fi-search"></i>
                  </span>
                  <input className="form-control" type="text" name="keywords" placeholder="Keywords..." />
                </div>
              </div>
              <hr className="hr-light d-lg-none my-2" />
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="dropdown border-end-sm border-light" data-bs-toggle="select">
                  <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                    <i className="fi-list me-2"></i>
                    <span className="dropdown-toggle-label">Make</span>
                  </button>
                  <input type="hidden" name="make" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Acura</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">BMW</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Citroen</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Lexus</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Mercedes-Benz</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Nissan</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Toyota</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="hr-light d-sm-none my-2" />
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="dropdown border-end-md border-light" data-bs-toggle="select">
                  <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                    <i className="fi-list me-2"></i>
                    <span className="dropdown-toggle-label">Model</span>
                  </button>
                  <input type="hidden" name="model" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Altima</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Juke</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Leaf</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Maxima</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Micra</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Murano</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Note</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Patrol</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="hr-light d-md-none my-2" />
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="dropdown border-end-sm border-light" data-bs-toggle="select">
                  <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                    <i className="fi-car fs-lg me-2"></i>
                    <span className="dropdown-toggle-label">Body type</span>
                  </button>
                  <input type="hidden" name="type" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Compact</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Crossover</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Coupe</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Family MPV</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Pickup</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Sedan</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">SUV</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Wagon</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="hr-light d-sm-none my-2" />
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="dropdown" data-bs-toggle="select">
                  <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                    <i className="fi-map-pin me-2"></i>
                    <span className="dropdown-toggle-label">Location</span>
                  </button>
                  <input type="hidden" name="location" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Dallas</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Chicago</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Houston</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Las Vegas</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Los Angeles</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">New York</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">San Francisco</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="hr-light d-lg-none my-2" />
              <div className="col-lg-2">
                <button className="btn btn-primary w-100" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Lightbox
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </>
  );
};
