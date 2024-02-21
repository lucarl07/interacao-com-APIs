const urlParam = new URLSearchParams(window.location.search),
paramIndex = parseInt(urlParam.get('index'));

document.addEventListener('DOMContentLoaded', () => {
    const baseURL = `https://swapi.dev/api/people/${paramIndex+1}/`;
    console.log(`Data found in: ${baseURL}`)

    fetch(baseURL).then(response => {
        if(!response.ok) {
            throw new Error(`Erro de rede! Código: ${response.status}`)
        }

        return response.json()
    })
    .then(data => {
        console.log(data)
        getCharacterData(data)
    })
    .catch(err => console.log(err))
})

function getCharacterData(item) {
    const photo = document.querySelector('.char-img'),
    name = document.querySelector('.name'),
    height = document.querySelector('.height'),
    mass = document.querySelector('.mass'),
    gender = document.querySelector('.gender'),
    hairColor = document.querySelector('.hair-color'),
    eyeColor = document.querySelector('.eye-color'),
    skinColor = document.querySelector('.skin-color'),
    birthDate = document.querySelector('.birth-year'),
    planet = document.querySelector('.planet');

    photo.src = `../image/perso${paramIndex}.png`
    name.innerHTML = `${item.name}`
    height.innerHTML += ` ${item.height}`
    mass.innerHTML += ` ${item.mass}`
    gender.innerHTML += ` ${item.gender}`
    hairColor.innerHTML += ` ${item.hair_color}`
    eyeColor.innerHTML += ` ${item.eye_color}`
    skinColor.innerHTML += ` ${item.skin_color}`
    birthDate.innerHTML += ` ${item.birth_year}`
    planet.innerHTML += ` ${item.homeworld}`
}