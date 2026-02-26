const express = require('express');
const bodyParser = require('body-parser');

const generalRoutes = require('./routes/general.js');
const authRoutes = require('./routes/auth_users.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// routes
app.use('/', generalRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
