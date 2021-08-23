const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// public static path
const staticPath = path.join(__dirname, "../public")
const partials_path = path.join(__dirname, "../views/partials");

app.set("view engine", "hbs");
hbs.registerPartials(partials_path)

app.use(express.static(staticPath));

// Routing
app.get('/', (req, res) => {
    res.render("index",{ title: "Home"})
})

app.get('/about', (req, res) => {
    res.render("about",{ title: "About"})
})

app.get('/weather', (req, res) => {
    res.render("weather",{ title: "Weather"})
})

app.get('*', (req, res) => {
    res.render("404",{ title: "404 error"})
})

app.listen(port, () => {
    console.log(`listening to the port the ${port}`);
})