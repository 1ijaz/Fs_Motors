import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export const Services = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardSliderStyle = {
    width: '115%', // Adjust the width as needed
    margin: '0 auto' // Center the slider
  };
  const sliderClick = () => {
    alert('hello world');
  };
  const slides = [
    {
      image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'This is a title',
      description: 'This is a description',
      clickEvent: sliderClick
    },
    {
      image: 'https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'This is a second title',
      description: 'This is a second description',
      clickEvent: sliderClick
    },
    {
      image: 'https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'This is a third title',
      description: 'This is a third description',
      clickEvent: sliderClick
    },
    {
      image: 'https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'This is a fourth title',
      description: 'This is a fourth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'This is a fifth title',
      description: 'This is a fifth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'This is a sixth title',
      description: 'This is a sixth description',
      clickEvent: sliderClick
    },
    {
      image: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600',
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
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Popular" {...a11yProps(0)} />
              <Tab label="Upcoming" {...a11yProps(1)} />
              <Tab label="New" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div style={cardSliderStyle}>
              <ReactCardSlider slides={slides} />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div style={cardSliderStyle}>
              <ReactCardSlider slides={slides} />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div style={cardSliderStyle}>
              <ReactCardSlider slides={slides} />
            </div>
          </CustomTabPanel>
        </div>
      </div>
    </>
  );
};
