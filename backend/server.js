   // backend/server.js
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const mongoURI = process.env.MONGODB_URI;
   const paperRoutes = require('./routes/papers');
   require('dotenv').config();

   const app = express();
   app.use(cors());
   app.use(express.json());

   // Connect to MongoDB
   mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error('MongoDB connection error:', err));

   app.use('/api/papers', paperRoutes);

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));