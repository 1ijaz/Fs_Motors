import React from 'react';
import { Footer } from 'website-components/footer';
export const CeoMessage = (props) => {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {' '}
              <img src="../img/ceo_message.PNG" className="img-responsive" alt="" />{' '}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>CEO Message</h2>
                <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <ul>{props.data ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
