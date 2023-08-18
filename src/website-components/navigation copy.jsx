import React from 'react';

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            {' '}
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img\fs-logo-new.PNG" alt="Logo" className="fsLogo" />
          </a> */}
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              fontFamily: 'Brush Script MT, cursive',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#ffffff'
              // textDecoration: 'underline'
            }}
          >
            FS Motors
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#carousel-example" className="page-scroll">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                About <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#portfolio" className="page-scroll">
                    About FS Motors
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="page-scroll">
                    About CEO
                  </a>
                </li>
                <li>
                  <a href="#workingVideo" className="page-scroll">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="page-scroll">
                    Testimonials
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#workingVideo" className="page-scroll">
                Working Video
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
