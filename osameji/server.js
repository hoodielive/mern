// Import Construct.
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Database Construct.
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database..'))

// Middleware Construct.
app.use(express.json())

// Routes Construct.
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

// Server Construct.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server Started...'))
