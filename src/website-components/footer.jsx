export const Footer = () => {
  return (
    <>
      <div id="footer" className="text-center">
        <div className="container my-5" id="About Us">
          <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
            <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">FS Motors</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgrounColor: '#7c4dff', height: '2px' }} />
                    <p>
                      Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>

                  {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgrounColor: '#7c4dff', height: '2px' }} />
                  <p>
                    <a href="#!" className="text-white">
                      MDBootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      MDWordPress
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      BrandFlow
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Bootstrap Angular
                    </a>
                  </p>
                </div> */}

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgrounColor: '#7c4dff', height: '2px' }} />
                    <p>
                      <a href="#!" className="text-white">
                        Your Account
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Become an Affiliate
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Shipping Rates
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Help
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Pakistan</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgrounColor: '#7c4dff', height: '2px' }} />
                    <p>
                      <i className="fas fa-home mr-3"></i> Opposite Almas car Village ring road hayyatabad peshawar. Pakistan
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> Hamza.khan8522@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> Hamza khan: 03410094747
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> Afzal khan: 03105555383
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">UAE</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgrounColor: '#7c4dff', height: '2px' }} />
                    <p>
                      <i className="fas fa-home mr-3"></i> 2nd location.Industrial Area 02 Sharjah UAE
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> Hamza.khan8522@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> 0553546919
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="text-center p-3" style={{}}>
              © 2023 Copyright:
              <a className="text-white" href="#">
                FSMotors.com
              </a>
            </div>
          </footer>
          <a className="btn-scroll-top" href="#top" data-scroll>
            <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
            <i className="btn-scroll-top-icon fi-chevron-up"> </i>
          </a>
        </div>
      </div>
    </>
  );
};
