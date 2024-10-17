const express = require('express');
const path = require('path');
const app = express();


app.use((req, res, next) => {
    res.status(503).send('Site en maintenance, revenez plus tard svp');
});


app.listen(81, () => {
    console.log('Server running at http://localhost:81');
});
