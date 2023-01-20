const express = require('express')
const router = express.Router()
const movieDB = require('../SampleDB/movie')

router.get('/titles-with-rating', (req, res) => {
    const titlesWithRating = movieDB.movies.map( element => {
        return element.Title + " : " + element.imdbRating
    })
    res.send( titlesWithRating )
})

router.get('/:name', (req, res) => {
    const requestedName = req.params.name
    console.log( requestedName )  
    const requestedMovie = movieDB.movies.filter( element => {
       if( element.Title.includes( requestedName )){
        return element
       }
    })
    console.log( requestedMovie )
    res.send( requestedMovie )
})

module.exports = router