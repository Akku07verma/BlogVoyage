const express = require('express')
const path = require('path')

const app = express()
const files = ['assets', 'stylesheets', 'scripts']

// Setting in use the static folders
files.map((element) => (
    app.use(`/${element}`, express.static(element))
))

// Creating routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts/login.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts/sign.html'))
})


// Listening on Port 3000
app.listen(3000, () => {
    console.log("Listening on Port 3000")
})