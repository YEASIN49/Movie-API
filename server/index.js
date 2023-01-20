const express = require("express")
const movieDB = require('./SampleDB/movie')
const cors = require('cors')
const PORT = 5000
const app = express()

app.use(cors())
app.options('*', cors()); 

// Direct Call
app.get('/', (req, res) => {
    res.send(movieDB.movies)
})

app.get('/titles', (req, res) => {
    const titles = movieDB.movies.map( element => {
        return element.Title 
    })
    res.send( titles )
})

// Call Using Router
const serviceRouter = require('./routers/movieList')
app.use('/movies', serviceRouter)

app.listen( PORT, () => {
    console.log('server is running now')
})