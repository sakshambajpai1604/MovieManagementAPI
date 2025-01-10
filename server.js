const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

// Movie routes
app.use('/movies', movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
