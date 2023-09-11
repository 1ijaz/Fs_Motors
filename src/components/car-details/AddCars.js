// material-ui

import React, { useState } from 'react';
import { Button, Grid, InputLabel, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%', // Adjust the width as needed for responsiveness
  maxWidth: '600px', // Add a max-width to prevent the form from becoming too wide on large screens
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4
};
export const AddCars = () => {
  const [carId, setCarId] = useState('');

  const [carModelType, setCarModelType] = useState('');
  const [carBuyingPrice, setCarBuyingPrice] = useState('');
  const [carMaintenanceCost, setCarMaintenanceCost] = useState('');
  const [carShowroomCost, setCarShowroomCost] = useState('');
  const [carTotalCost, setCarTotalCost] = useState('');
  const [carFinalPrice, setCarFinalPrice] = useState('');
  const [carSellingPrice, setCarSellingPrice] = useState('');
  const [carBuyingDate, setCarBuyingDate] = useState('');
  const [carSellingDate, setCarSellingDate] = useState('');
  const [carWorkshopId, setCarWorkshopId] = useState('');
  const [carStatus, setCarStatus] = useState('');
  const [carShowroomId, setCarShowroomId] = useState('');
  const [open, setOpen] = React.useState(false);
  const [selectedCarModel, setSelectedCarModel] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    if (!carId || !carModelId) {
      console.log('Please fill in all required fields.');
    } else {
      // Submit the form or perform further actions here
      console.log('Form submitted successfully!');
    }
  };
  const carModelOptions = [
    { value: 'model1', label: 'Option 1' },
    { value: 'model2', label: 'Option 2' }
    // Add more options as needed
  ];
  return (
    <>
      <div>
        <Button onClick={handleOpen}>Add Car</Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className="container mt-5">
              <h4>Car Information Form</h4>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car ID"
                      variant="outlined"
                      fullWidth
                      value={carId}
                      onChange={(e) => setCarId(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="carModelLabel">Car Model ID</InputLabel>
                      <Select
                        labelId="carModelLabel"
                        id="carModelId"
                        value={selectedCarModel}
                        onChange={(e) => setSelectedCarModel(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                      >
                        {carModelOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Model Type"
                      variant="outlined"
                      fullWidth
                      value={carModelType}
                      onChange={(e) => setCarModelType(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Buying Price"
                      variant="outlined"
                      fullWidth
                      value={carBuyingPrice}
                      onChange={(e) => setCarBuyingPrice(e.target.value)}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Maintenance Cost"
                      variant="outlined"
                      fullWidth
                      value={carMaintenanceCost}
                      onChange={(e) => setCarMaintenanceCost(e.target.value)}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Showroom Cost"
                      variant="outlined"
                      fullWidth
                      value={carShowroomCost}
                      onChange={(e) => setCarShowroomCost(e.target.value)}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Total Cost"
                      variant="outlined"
                      fullWidth
                      value={carTotalCost}
                      onChange={(e) => setCarTotalCost(e.target.value)}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Final Price"
                      variant="outlined"
                      fullWidth
                      value={carFinalPrice}
                      onChange={(e) => setCarFinalPrice(e.target.value)}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Car Selling Price"
                      variant="outlined"
                      fullWidth
                      value={carSellingPrice}
                      onChange={(e) => setCarSellingPrice(e.target.value)}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label="Car Buying Date"
                        value={carBuyingDate}
                        onChange={(date) => setCarBuyingDate(date)}
                        renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label="Car Selling Date"
                        value={carSellingDate}
                        onChange={(date) => setCarSellingDate(date)}
                        renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="carModelLabel">Car Workshop</InputLabel>
                      <Select
                        labelId="carModelLabel"
                        id="carWorkShopId"
                        value={carWorkshopId}
                        onChange={(e) => setCarWorkshopId(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                      >
                        {carModelOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="carModelLabel">Car Status</InputLabel>
                      <Select
                        labelId="carModelLabel"
                        id="carModelId"
                        value={carStatus}
                        onChange={(e) => setCarStatus(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                      >
                        {carModelOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="carModelLabel">Car Showroom</InputLabel>
                      <Select
                        labelId="carModelLabel"
                        id="carModelId"
                        value={carShowroomId}
                        onChange={(e) => setCarShowroomId(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                      >
                        {carModelOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ float: 'right', mt: 2 }}>
                  Save
                </Button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};
