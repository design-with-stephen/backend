
// http://localhost:3008
// http://localhost:3008/endpoint
// HTTP VERBS AND ROUTES OR PATHS
// the method informs the nature of request and the route is a further subdirectory
// (basically we direct the request to the body of the code too respond appropriately,
// and these locations or routes are called the end points)


const express = require('express');
const app =express();
const port = 3008;

const data = ["steve"]

//middleware
app.use(express.json());


// website endpoints are used to send html code or web pages to the user
// Type 2: website end points
app.get('/Home', (req, res) => {
    // end point number 1
    res.send(`
        <body style="background:White; color: red;">
           <P>${JSON.stringify(data)}</p>
           <a href="/dashboard">Dashboard</a>
        </body>
        `)
    res.sendStatus(200)
})

// second end point
app.get("/dashboard", (req, res) => {
    res.send(`
        <body style="background:White; color: blue;">
            <h2>Dashboard page</h2>
            <a href="/Home">Home</a>
        </body>
        `)
    
    res.send("hey stephen");
})

//TYPE: API endpoint
//CRUD- METHOD CREATE POST , READ-GET

app.get("/api/data", (req, res) => {
    console.log('this data')
    res.send(data)
})

//EXAMPLE ADDING A NEW USER
app.post("/api/data", (req, res) => {
    // console.log('this data')
    const newUser = req.body
    console.log(newUser)
    data.push(newUser.name)
    // data.push(newUser.name);
    res.sendStatus(201)
    // res.send(data)
})

// delete a user
app.delete("/api/data", (req,res) => {
    data.pop();
    console.log("we deleted the user at the end")
    res.sendStatus(200)

})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})