// Environmental Variables
const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect Database.
connectDB()

// Init Middleware.
app.use(express.json({ extended: false }))

// Routes.
app.get('/', (req, res) => res.send('API Running...'))

// Define Routes.
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

// Port Configuration.
const PORT = process.env.PORT || 5000

// HTTP Server Configuration.
app.listen(PORT, () => console.log(`Awesome Server started on port ${PORT}....`))
