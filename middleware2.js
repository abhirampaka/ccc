const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log("A new Request at: " + new Date());
    next();
});

// Route handler
app.get('/', (req, res) => {
    res.send("middlee"); // No need to call next here
});

// Server startup
app.listen(8080, () => {
    console.log('Server Running here');
});