const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
app.use(express.json());

// Mock data for multiple listings
const mockListings = [
  {
    listing_id: 1,
    title: 'Product A',
    description: 'High-quality product for your needs.',
    price: '$19.99',
    quantity: 20,
    views: 150,
    sales: 50,
  },
  {
    listing_id: 2,
    title: 'Product B',
    description: 'Versatile and durable product.',
    price: '$29.99',
    quantity: 15,
    views: 120,
    sales: 30,
  },
  {
    listing_id: 3,
    title: 'Product C',
    description: 'Elegant design with advanced features.',
    price: '$39.99',
    quantity: 25,
    views: 180,
    sales: 70,
  },
  {
    listing_id: 4,
    title: 'Product D',
    description: 'Compact and efficient product.',
    price: '$24.99',
    quantity: 18,
    views: 100,
    sales: 40,
  },
  {
    listing_id: 5,
    title: 'Product E',
    description: 'Innovative technology for modern living.',
    price: '$49.99',
    quantity: 12,
    views: 200,
    sales: 60,
  },
  {
    listing_id: 6,
    title: 'Product F',
    description: 'Stylish and eco-friendly choice.',
    price: '$34.99',
    quantity: 22,
    views: 130,
    sales: 45,
  },
  {
    listing_id: 7,
    title: 'Product G',
    description: 'Premium quality with a sleek design.',
    price: '$44.99',
    quantity: 17,
    views: 160,
    sales: 55,
  },
  {
    listing_id: 8,
    title: 'Product H',
    description: 'Effortless and user-friendly product.',
    price: '$29.99',
    quantity: 20,
    views: 140,
    sales: 50,
  },
  {
    listing_id: 9,
    title: 'Product I',
    description: 'Versatile features for various applications.',
    price: '$39.99',
    quantity: 15,
    views: 120,
    sales: 30,
  },
  {
    listing_id: 10,
    title: 'Product J',
    description: 'Modern design with cutting-edge technology.',
    price: '$49.99',
    quantity: 25,
    views: 180,
    sales: 70,
  },
  // Add more mock listings as needed
];

app.get('/etsy/listing/:listingId?', (req, res) => {
  const { listingId } = req.params;

  if (listingId) {
    const listing = mockListings.find((listing) => listing.listing_id.toString() === listingId);

    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ error: 'Listing not found' });
    }
  } else {
    res.json(mockListings);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
