import React from 'react';
export const Team = () => {
  return (
    <div id="team" className="text-center">
      <div className="single_product">
        <div className="container-fluid">
          <div className="product_image_side">
            <div className="row">
              <div className="col-md-5">
                {' '}
                <img alt="" src="https://i.imgur.com/JbalT3I.jpg" name="stage" width="400" height="400" />{' '}
              </div>
              <div className="col-md-7">
                <div className="product_description text-left">
                  <div className="product_name">Hyundai ELITE i20 Star Dust</div>
                  <div className="product-rating mt-1">
                    <span className="badge badge-success">
                      <i className="fa fa-star"></i> 4.5 Star
                    </span>{' '}
                    <span className="rating-review">3455 Reviews</span>
                  </div>
                  <div className="mt-2">
                    Price starts from - ₹<span className="product_price">5,29000</span>{' '}
                  </div>
                  <div>
                    {' '}
                    <span className="product_saved">EMI starts: </span> <span className="emi_starts">5,222</span>{' '}
                  </div>
                  <div className="mt-1">
                    {' '}
                    <button className="btn btn-sm btn-outline-info">Rate this car</button>{' '}
                    <button className="btn btn-sm btn-outline-danger">Get Finance offers</button>{' '}
                  </div>
                  <hr className="singleline" />
                  <div>
                    Color - <span className="car_color">RED</span>
                  </div>
                  <div>
                    Service cost - <span className="car_service">2665/yr</span>
                  </div>
                  <div>
                    {' '}
                    Seats - <span className="car_seats">5 seats</span>
                  </div>
                  <div>
                    {' '}
                    Transmission - <span className="car_transmission">Manual</span>
                  </div>
                  <div>
                    Engine - <span className="car_engine">1197 cc</span>
                  </div>
                  <div>
                    {' '}
                    BHP - <span className="car_bhp">81.86</span>
                  </div>
                  <div>
                    Power Steering - <span className="car_steering">Yes</span>
                  </div>
                  <div>
                    {' '}
                    Alloy Wheels - <span className="car_alloy">Yes</span>
                  </div>
                  <div>
                    {' '}
                    Airbag - <span className="car_airbag">Yes</span>
                  </div>
                  <div>
                    <div className="col-xs-6 mt-5">
                      {' '}
                      <button type="button" className="btn btn-primary shop-button">
                        View Latest offers
                      </button>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
