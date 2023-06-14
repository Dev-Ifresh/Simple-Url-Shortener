// starting our server
require('dotenv').config();
const express = require("express"); //import our express library
const mongoose = require("mongoose");
const shortUrl = require('../link_shortener/models/url')
const mongodb_uri = process.env.MONGODB_URI
const PORT = process.env.PORT



const app = express() //tie the express function to the variable called app 


// require('../link_shortener/db').connectToMongoDB

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs'); //this is to set the view engine that will be sending files from the server


app.get("/", async (req, res) => {
    const ShortUrls = await shortUrl.find() //We want it to display all the url created on the landing page
    res.render('index', { ShortUrls: ShortUrls })

})

app.post("/shortUrls", async (req, res) => {
   await shortUrl.create({ original: req.body.originalurl })  //Everytime the user post a URL on the form, a new url model is created
   
   res.redirect('/')

})

app.get("/:shotUrls", async (req, res) => {//When you click on the shortened Url

    const shortUrls = await shortUrl.findOne ({ short: req.params.shotUrls }) //We are going through all the urls in the database, and we are looking for the url in which the short object has the same shortened as the one on the params
if (shortUrls == null) return res.sendStatus(404) //if nothing was found, we respond with 404 status(meaning not found)

shortUrls.clicks++  //but if found we will increase the clicks by 1
shortUrls.save()

res.redirect(shortUrls.original)  //After which we redirect to the full url of when that particular shortened url was found

})

mongoose.connect(mongodb_uri, 
    {useNewUrlParser: true, useUnifiedTopology: true})

.then(console.log('MongoDB is connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});

