function getPlanets(url){
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.results))
}
export { getPlanets }