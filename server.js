// Dependencies
// =============================================================
const express = require('express');
const path=require("path");
const bodyParser= require ("body-parser");
const app = express()

// Ports
//=============================================================
const PORT = 7500;

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Movie Characters (DATA) (an array of objects)
// =============================================================
const quotes=[
    {
        routeName:"michaelscott",
        quote: "Im not superstitious, but I am a little stitious.",
        
    },
    {
        routeName:"dwightschrute",
       quote:"I never thought Id say this, but I think I ate too much bone marrow."
    },
    {
        routeName:"jimhalpert",
        quote:"Everything I have I owe to this job… this stupid, wonderful, boring, amazing job."
    },
    {
        routeName:"kevinmalone",
        quote: "I just want to lie on the beach and eat hot dogs. Thats all Ive ever wanted.",
    },
    {
        routeName:"pambeesley",
        quote: "And I feel God in this Chilis tonight.",
    },
    {
        routeName:"kellykapoor",
        quote: "Who am I? Im Kelly Kapoor, the business bitch.",
    },
];


// Routes
// =============================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});
app.get("/quote", function(req, res){
    res.sendFile(path.join(__dirname, "quote.html"))
});

app.get('/api/quotes', function(req,res){
    res.json(quotes);
});





app.get('/api/:quotes', function(req, res){
    var chosen =req.params.quotes;
    if (chosen){
        console.log(chosen);
        for(var i=0; i <quotes.length; i++){
            if (chosen==quotes[i].routeName){
                res.json(quotes[i]);
                return;
            }
        }
        res.json(false);
    }
    else{
        res.json(quotes);
    }
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
    console.log(`app listening on port ${PORT}`)
    });