import React from 'react';

export const WorkFlow = (props) => {
  return (
    <div id="workingVideo">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/WM1wgQ7bb2w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* <iframe
              width="100%"
              height="480"
              src={`https:///www.youtube.com/embed/E7wJTI-1dvQ`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            /> */}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Watch Our Latest Video</h2>
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
  );
};
