const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('./config/db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payments');
const utensilRoutes = require('./routes/utensils');
const inventoryRoutes = require('./routes/inventory');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/utensils', utensilRoutes);
app.use('/api/inventory', inventoryRoutes);

app.get('/', (req, res) => {
  res.send('MongoDB Backend API is working');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
