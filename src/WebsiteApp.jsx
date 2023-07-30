import React, { useState, useEffect } from 'react';

import { Header } from 'website-components/header';
import { Features } from 'website-components/features';
import { About } from 'website-components/about';
import { Services } from 'website-components/services';
import { Gallery } from 'website-components/gallery';
import { Testimonials } from 'website-components/testimonials';
import { Team } from 'website-components/Team';
import { Contact } from 'website-components/contact';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import { Navigation } from 'website-components/navigation';
import { WorkFlow } from 'website-components/workFlow';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

const WebsiteApp = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <WorkFlow data={landingPageData.workFlowVideo} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default WebsiteApp;
