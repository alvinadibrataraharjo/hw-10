var express = require('express')

var app = express()
const movies = require("./routes/movies.js");
const users = require("./routes/users.js");
const path = require('path');

app.use(express.json());

app.use("/movies", movies);
app.use("/users", users);

// serve static file
app.use('/upload', express.static(path.join(__dirname, "upload")))

app.listen(3000)

