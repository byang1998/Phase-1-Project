const BASE_URL = "http://localhost:3000/cities"

fetch(BASE_URL)
.then(resp => resp.json())
.then(data => console.log("This is a check."))