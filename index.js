const BASE_URL = "http://localhost:3000/cities"
const cityContainer = document.getElementById("city-container")

fetch(BASE_URL)
.then(resp => resp.json())
.then(function(cityData){
    cityData.forEach((cities) => renderCities(cities));
    })


function renderCities(cities){
    const citiesDiv = document.createElement('div')
    citiesDiv.className = "card"
    

    const citiesName = document.createElement('h3')
    citiesName.innerText = cities.name

    const cityImg = document.createElement("img")
    cityImg.src = cities.img;
    cityImg.alt = `${cities.name} image`;

    const cityPop = document.createElement('h4')
    cityPop.innerText = "Population: " + cities.population

    const cityState = document.createElement('p')
    cityState.innerText = "State: " + cities.state

    const cityRating = document.createElement('p')
    cityRating.innerText = "Rating: " + cities.rating


    const voteBttn = document.createElement('button')
    voteBttn.innerText = "Vote"
    voteBttn.addEventListener('click', () => {
        cities.rating++
        cityRating.innerText = "Rating: " + cities.rating

    })
    const deleteBttn = document.createElement("button");
        deleteBttn.className = "delete-bttn";
        deleteBttn.textContent = "Delete"
        deleteBttn.addEventListener('click', () => deleteCity());

function deleteCity(card){
    citiesDiv.remove()
    fetch(BASE_URL + `/${cities.id}`, {
    method: 'DELETE'
  })
    }


citiesDiv.append(citiesName, cityImg, cityPop, cityState, cityRating, voteBttn, deleteBttn)
cityContainer.append(citiesDiv)

}

const newCityForm = document.getElementById('cities-form')
newCityForm.addEventListener('submit', submitHandler)

function submitHandler(e){
    e.preventDefault()

const newCity = {
    name: e.target['name-input'].value,
    image: e.target['image-input'].value,
    population: e.target['population-input'].value,
    state: e.target['state-input'].value,
    rating: +e.target['new-rating'].value,
}

fetch(BASE_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'applications/json'
    },
    body: JSON.stringify(newCity)
})
.then(resp => resp.json())
.then(data => renderCities(data))

fetch(BASE_URL, {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'applications/json'
    },
    body: JSON.stringify(newCity)
})
.then(resp => resp.json())
.then(data => renderCities(data))


renderCities(newCity)
e.target.reset()
}