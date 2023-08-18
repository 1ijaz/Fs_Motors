import React from 'react';
import Button from '@mui/material/Button';
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
  function handleSearchClick() {
    setIndex(1);
  }
  const [index, setIndex] = useState(-1);
  return (
    <>
      <carfilter id="carfilter">
        <section className="search-banner bg- text-white py-5" id="search-banner">
          <div className="container py-5 my-5">
            <div className="row text-center pb-4">
              <div className="col-md-12">
                <h2 style={{ color: '#fff' }}>Find the New & Used Car</h2>
                <p>With thousands of cars, we have just the right one for you</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group ">
                          <select id="inputState" className="form-control">
                            <option selected>Select New/Used</option>
                            <option>New</option>
                            <option>Used</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group ">
                          <select id="inputState" className="form-control">
                            <option selected>Select Make</option>
                            <option>BMW</option>
                            <option>Audi</option>
                            <option>Toyota</option>
                            <option>Tesla</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group ">
                          <select id="inputState" className="form-control">
                            <option selected>Select Model</option>
                            <option>City</option>
                            <option>Jazz</option>
                            <option>Brio</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group ">
                          <select id="inputState" className="form-control">
                            <option selected> Select Location</option>
                            <option>Dubai</option>
                            <option>Sharjah</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group ">
                          <select id="inputState" className="form-control">
                            <option selected> Select Budget</option>
                            <option>1 Lac-5 Lac</option>
                            <option>5 Lac-10 Lac</option>
                            <option>10 Lac-15 Lac</option>
                            <option>15 Lac-20 Lac</option>
                            <option>20 Lac-25 Lac</option>
                            <option>25 Lac & Above</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <Button size="large" variant="contained" onClick={handleSearchClick}>
                          Search Car
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </carfilter>
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
