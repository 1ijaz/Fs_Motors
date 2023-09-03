import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export const Services = () => {
  return (
    <>
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="col-md-12 col-md-offset-1 section-title">
            <h2>Popular car body types</h2>
            <section className="container pb-5 mb-md-4">
              <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2">
                <a className="btn btn-link btn-light fw-normal px-0" href="car-finder-catalog-grid.html">
                  View all<i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i>
                </a>
              </div>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/sedan.svg" width="160" alt="Sedan" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-list.html">
                      Sedan
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/suv.svg" width="160" alt="SUV" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-grid.html">
                      SUV
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/wagon.svg" width="160" alt="Wagon" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-list.html">
                      Wagon
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/crossover.svg" width="160" alt="Crossover" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-grid.html">
                      Crossover
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/coupe.svg" width="160" alt="Coupe" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-list.html">
                      Coupe
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/pickup.svg" width="160" alt="Pickup" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-grid.html">
                      Pickup
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/sport.svg" width="160" alt="Sport Coupe" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-list.html">
                      Sport Coupe
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/compact.svg" width="160" alt="Compact" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-grid.html">
                      Compact
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/convertible.svg" width="160" alt="Convertible" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-list.html">
                      Convertible
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                    <img className="d-block mx-auto mb-3" src="../icons/mpv.svg" width="160" alt="Family MPV" />
                    <a className="nav-link-light stretched-link fw-bold text-white" href="car-finder-catalog-grid.html">
                      Family MPV
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
