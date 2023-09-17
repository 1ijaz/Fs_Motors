import React, { useState } from 'react';
import { TextField, Box, Button, Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';

function CarImageGallery() {
  const [trackingId, setTrackingId] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate fetching images from a server based on search criteria.
    // In a real application, you would make an API request here.
    // For the example, we're just using some sample data.
    const sampleData = [
      { id: 1, name: 'Car 1', model: 'Model X', image: 'car1.jpg' },
      { id: 2, name: 'Car 2', model: 'Model Y', image: 'car2.jpg' },
      { id: 3, name: 'Car 3', model: 'Model Z', image: 'car3.jpg' }
    ];

    // Filter the data based on search criteria
    const filteredData = sampleData.filter((car) => {
      return (
        (!trackingId || car.id.toString() === trackingId) &&
        (!carName || car.name.toLowerCase().includes(carName.toLowerCase())) &&
        (!carModel || car.model.toLowerCase().includes(carModel.toLowerCase()))
      );
    });

    setSearchResults(filteredData);
  };

  return (
    <Container>
      <Box my={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Tracking ID"
              variant="outlined"
              fullWidth
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="Car Name" variant="outlined" fullWidth value={carName} onChange={(e) => setCarName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="Model" variant="outlined" fullWidth value={carModel} onChange={(e) => setCarModel(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSearch} size="large">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        {searchResults.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card>
              <CardMedia component="img" height="140" image={car.image} alt={car.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Model: {car.model}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CarImageGallery;
