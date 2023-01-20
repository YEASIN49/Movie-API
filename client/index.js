function getAll(){
    fetch('http://localhost:5000')
    .then( res => {
        
        
        return res.json()
    })
    .then(parsedRes => {
        const container = document.getElementById('movie-container')
        let movieMarkup = null
        parsedRes.forEach( item => {
            console.log({ item })
            movieMarkup = movieMarkup ? ( 
                movieMarkup +
                `<div style="border: 1px solid red"> 
                    <img src="${ item.Poster }" width="200" height="200">
                    <p>Title: ${ item.Title }</p>
                    <p>Year: ${ item.Year }</p>
                    <p>imdbRating: ${ item.imdbRating }</p>
                    <p>ID: ${ item.ID }</p>
                </div>`
            )
            : 
            (
                `<div style="border: 1px solid red"> 
                    <img src="${ item.Poster }" width="200" height="200">
                    <p>Title: ${ item.Title }</p>
                    <p>Year: ${ item.Year }</p>
                    <p>imdbRating: ${ item.imdbRating }</p>
                    <p>ID: ${ item.ID }</p>
                </div>`
            )
        })
       
        

        //CLEANING EXISTING MOVIE HTML NODE/ELEMENT
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        // Adding new movie data markup
        container.insertAdjacentHTML('beforeend', movieMarkup)

    })
    .catch(err => {
        console.log( err )
    })
}

function getRatings(){
    fetch('http://localhost:5000')
    .then( res => {
        
        
        return res.json()
    })
    .then(parsedRes => {
        const container = document.getElementById('movie-container')
        let movieMarkup = null
        parsedRes.forEach( item => {
            console.log({ item })
            movieMarkup = movieMarkup ? ( 
                movieMarkup +
                `<div style="border: 1px solid red"> 
                    <img src="${ item.Poster }" width="200" height="200">
                    <p>Title: ${ item.Title }</p>
                    <p>imdbRating: ${ item.imdbRating }</p>
                </div>`
            )
            : 
            (
                `<div style="border: 1px solid red"> 
                    <img src="${ item.Poster }" width="200" height="200">
                    <p>Title: ${ item.Title }</p>
                    <p>imdbRating: ${ item.imdbRating }</p>
                </div>`
            )
        })

        //CLEANING EXISTING MOVIE HTML NODE/ELEMENT
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        // Adding new movie data markup
        container.insertAdjacentHTML('beforeend', movieMarkup)

    })
    .catch(err => {
        console.log( err )
    })
}

function search(){
    const searchName = document.getElementById('search-input').value
    fetch('http://localhost:5000/movies/' + searchName)
    .then( res => {
        return res.json()
    })
    .then(parsedRes => {
        const container = document.getElementById('movie-container')
        let movieMarkup = null
        if( !parsedRes.length ){
            movieMarkup =
                `<div style="border: 1px solid red"> 
                    <p> Not Found </p>
                </div>`
        }
        else if( parsedRes.length ){
            parsedRes.forEach( item => {
                console.log({ item })
                movieMarkup = movieMarkup ? ( 
                    movieMarkup +
                    `<div style="border: 1px solid red"> 
                        <img src="${ item.Poster }" width="200" height="200">
                        <p>Title: ${ item.Title }</p>
                        <p>imdbRating: ${ item.imdbRating }</p>
                    </div>`
                )
                : 
                (
                    `<div style="border: 1px solid red"> 
                        <img src="${ item.Poster }" width="200" height="200">
                        <p>Title: ${ item.Title }</p>
                        <p>imdbRating: ${ item.imdbRating }</p>
                    </div>`
                )
            })
        }

        //CLEANING EXISTING MOVIE HTML NODE/ELEMENT
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        // Adding new movie data markup
        container.insertAdjacentHTML('beforeend', movieMarkup)

    })
    .catch(err => {
        console.log( err )
    })
}