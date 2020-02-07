const express = require('express');

const app = express();
// SERVIDOR EXPRESS 
require('./routes/clients')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Listening on ${PORT}`);