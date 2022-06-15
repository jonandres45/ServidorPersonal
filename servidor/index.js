const express = require('express');

//initialize
const app = express();

//app.get('/', express.static('public'));

app.use(express.static(__dirname  + '/public'));

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("Listen in port 5000")
});