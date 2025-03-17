const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

// API to get restaurant list (Restaurant Cards)
app.get('/api/restaurants', async (req, res) => {
  const lat = req.query.lat || "12.971599"; 
  const lng = req.query.lng || "77.594566"; 

  // URL for Swiggy's restaurant list with dynamic coordinates
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

  try {
    // Fetch data from Swiggy's API
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      },
    });

    if (!response.ok) {
      return res.status(500).send('Failed to fetch restaurant data');
    }

    // Parse the response data as JSON
    const data = await response.json();
    res.json(data); // Send the restaurant list data back to the frontend
  } catch (error) {
    console.error('Error fetching restaurant list:', error);
    res.status(500).send('Error fetching restaurant list');
  }
});

// API to get the menu details of a specific restaurant
app.get('/api/menu', async (req, res) => {
  const { lat, lng, restaurantId } = req.query; // Get lat, lng, and restaurantId from query params

  // Ensure that lat, lng, and restaurantId are provided
  if (!lat || !lng || !restaurantId) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  // URL for Swiggy's menu API with dynamic coordinates and restaurant ID
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;

  try {
    // Fetch menu data from Swiggy's API
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0', // User-Agent header
      },
    });

    if (!response.ok) {
      return res.status(500).send('Failed to fetch menu data');
    }

    // Parse the response data as JSON
    const data = await response.json();
    res.json(data); // Send the menu data back to the frontend
  } catch (error) {
    console.error('Error fetching menu data:', error);
    res.status(500).send('Error fetching menu data');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
