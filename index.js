var express = require('express')
const router = express.Router();

var app = express()
const movies = require("./routes/movies.js");
const users = require("./routes/users.js");
const multer = require('./utils/multer.js');
const { message } = require('statuses');
const path = require('path');

app.use(express.json());

app.use("/movies", movies);
app.use("/users", users);

app.put('/upload', multer().single('photo'), (req,res)=>{
    const file = req.file.path

    console.log(file)

    if(!file){
        return res.status(400).json({
            status:false,
            message:'no file selected'
        })
    }

    res.send(file)
});

app.use('/upload', express.static(path.join(__dirname, "upload")))

app.listen(3000)

