const BASE_URL = "http://localhost:3000/cities"

fetch(BASE_URL)
.then(resp => resp.json())
.then(function(cityData){
    cityData.forEach((cities) => renderCities(cities));
    })
    
function renderCities(cities){
    const cityImg = document.createElement("img");
    cityImg.src = cities.img;
    cityImg.alt = `${cities.name} image`;
    console.log(cities)
    

}