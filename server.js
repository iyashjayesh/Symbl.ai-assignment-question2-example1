/**
 * This is the server file for the application.
 *
 * author: Yash Chauhan
 * created on: 06/12/2021
 */

const express = require('express');     // Express web server framework
let cors = require("cors");     //     Cross-Origin Resource Sharing    

// Express
const app = express();   // Create an Express application
app.use(cors());     // Enable CORS

//ROUTES
// GET /get-data
app.get('/get-data', (req, res) => {
    
    const data = {
        "data":[{
            "id":1,
            "name":"Item 1"
        },{
            "id":3,
            "name":"Item 3"   
        },{
            "id":2,
            "name":"Item 2"
        },{
            "id":4,
            "name":"Item 4"
        }]
    };

    res.json(data);    // Send the response
});

// Start the Express application on port 8000
app.listen(8000, () => {
    console.log('Server is running on port 8000');
}); //listen on port 3000


