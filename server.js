const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/html');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const { notes } = require('./db/db.json');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


