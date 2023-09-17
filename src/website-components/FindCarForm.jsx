import React, { useState } from 'react';
import { FormGroup } from 'reactstrap';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import '../style/find-car-form.css';
const FindCarForm = () => {
  const [tabValue, setTabValue] = useState(0); // State to manage the selected tab

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const applyPriceRange = () => {
    // Handle the logic for applying the price range here
    closePopover();
  };

  const resetPriceRange = () => {
    setMinPrice('');
    setMaxPrice('');
    // Handle the logic for resetting the price range here
    closePopover();
  };

  return (
    <div className="form">
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="New Cars" />
        <Tab label="Used Cars" />
        <Tab label="Ready Cars" />
      </Tabs>

      {/* Rest of your form */}

      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <TextField
          label="Model Search"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          // Add appropriate onChange and value props to manage the input value
        />

        <div className="form">
          <div className="col is-4 p8">
            <div className="popover-owner filter-pop" data-popover="{'trigger' : 'click';}" data-bayt-popover="2">
              <label htmlFor="filterButton" className="filter-label" style={{ paddingRight: 10 }}>
                Price Range:
              </label>
              <Button
                variant="contained"
                className="btn filter-btn is-secondary width-100 border4 p10x display-block price-fltr-btn bg-w filter-selected"
                onClick={openPopover}
              >
                <span className="price-fltr-text font16 font-n u-left color-black">
                  {minPrice} - {maxPrice}
                </span>
                <div className="has-icon">
                  <span className="icon m4r m4l is-arrow-down m0 m4t u-right font14 color-text"></span>
                </div>
              </Button>

              <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closePopover}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
              >
                <div className="popover border4" style={{ width: '460px', padding: 20 }}>
                  <div className="m16l m16r m16t">
                    <div className="m24b font-b">Price Range (AED)</div>
                    <div className="display-flex">
                      <div className="form-item is-stack m0">
                        <label htmlFor="minPrice" className="form-label color-ym-blue">
                          Minimum:
                        </label>
                        <div className="form-value">
                          <TextField
                            type="number"
                            id="minPrice"
                            placeholder="0"
                            variant="outlined"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            className="input is-small p-min-input"
                          />
                        </div>
                        <div className="m4t scroll-range">{/* Add your radio buttons here */}</div>
                      </div>
                      <div className="m12l m12r color-gray m28t font-xb">_</div>
                      <div className="form-item is-stack m0">
                        <label htmlFor="maxPrice" className="form-label color-ym-blue">
                          Maximum:
                        </label>
                        <div className="form-value">
                          <TextField
                            type="number"
                            id="maxPrice"
                            placeholder="To"
                            variant="outlined"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            className="input is-small p-max-input"
                          />
                        </div>
                        <div className="m4t scroll-range">{/* Add your radio buttons here */}</div>
                      </div>
                    </div>
                  </div>
                  {/* Additional content for the popover */}
                  <div className="p16 donereset" style={{ paddingTop: 5 }}>
                    <Button variant="outlined" color="primary" onClick={resetPriceRange} style={{ paddingLeft: 5, marginRight: 5 }}>
                      Reset
                    </Button>
                    <Button variant="contained" color="primary" onClick={applyPriceRange}>
                      Done
                    </Button>
                  </div>
                </div>
              </Popover>
            </div>
          </div>

          {/* Rest of your form components */}
        </div>
      </div>
      <FormGroup className="form__group">
        <button className="btn find__car-btn">Find Car</button>
      </FormGroup>
    </div>
  );
};

export default FindCarForm;
