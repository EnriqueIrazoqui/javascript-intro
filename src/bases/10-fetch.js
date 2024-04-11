const apiKey = "gZ0CqWqbfoMgjAh61ET2tOphG70I3FH0"

//https://api.giphy.com/v1/gifs/random?api_key=gZ0CqWqbfoMgjAh61ET2tOphG70I3FH0

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })