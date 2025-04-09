
// http://localhost:3008
// http://localhost:3008/endpoint


const express = require('express');
const app =express();
const port = 3008;

// HTTP VERBS AND ROUTES OR PATHS
// the method informs the nature of request and the route is a further subdirectory
// (basically we direct the request to the body of the code too respond appropriately,
// and these locations or routes are called the end points)

app.get('/', (req, res) => {
    // end point number 1
    res.send('Hello World! endpoint number 1', req.method)
    res.statusCode(200)
    
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})