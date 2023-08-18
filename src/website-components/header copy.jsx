import React from 'react';

export const Header = () => {
  return (
    <>
      <div id="carousel-example" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example" data-slide-to="1"></li>
          <li data-target="#carousel-example" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <a href="#">
              <img src="../img/intro-bg1.jpg" alt="" />
            </a>
            <div className="carousel-caption">
              <h3 style={{ color: '#fff' }}>Car</h3>
              <p>Just Car Around</p>
            </div>
          </div>
          <div className="item">
            <a href="#">
              <img src="../img/intro-bg2.jpg" alt="" />
            </a>
            <div className="carousel-caption">
              <h3 style={{ color: '#fff' }}>Car</h3>
              <p>Just Car Around</p>
            </div>
          </div>
          <div className="item">
            <a href="#">
              <img src="../img/intro-bg3.jpg" alt="" />
            </a>
            <div className="carousel-caption">
              <h3 style={{ color: '#fff' }}>Car</h3>
              <p>Just Car Around</p>
            </div>
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-example" data-slide="prev">
          <span className=""></span>
        </a>
        <a className="right carousel-control" href="#carousel-example" data-slide="next">
          <span className=""></span>
        </a>
      </div>
    </>
  );
};
