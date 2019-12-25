// Environmental Variables
const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect Database.

connectDB()

// Routes.
app.get('/', (req, res) => res.send('API Running...'))

// Port Configuration.
const PORT = process.env.PORT || 5000

// HTTP Server Configuration.
app.listen(PORT, () => console.log(`Awesome Server started on port ${PORT}....`))
