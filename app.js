const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from DevOps! from Usman !!!!'));
app.listen(3000, () => console.log('App running on port 3000'));
