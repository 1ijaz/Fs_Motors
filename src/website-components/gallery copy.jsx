import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
export const Gallery = () => {
  const sliderClick = () => {
    alert('hello world');
  };
  const slides = [
    { image: 'https://picsum.photos/200/300', title: 'This is a title', description: 'This is a description', clickEvent: sliderClick },
    {
      image: 'https://picsum.photos/600/500',
      title: 'This is a second title',
      description: 'This is a second description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/700/600',
      title: 'This is a third title',
      description: 'This is a third description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/500/400',
      title: 'This is a fourth title',
      description: 'This is a fourth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'This is a fifth title',
      description: 'This is a fifth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/800/700',
      title: 'This is a sixth title',
      description: 'This is a sixth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://picsum.photos/300/400',
      title: 'This is a seventh title',
      description: 'This is a seventh description',
      clickEvent: sliderClick
    }
  ];
  return (
    <>
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Featured Stock</h2>
          </div>
          <div id="body">
            <ReactCardSlider slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
};
