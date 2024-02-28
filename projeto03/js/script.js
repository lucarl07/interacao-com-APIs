// characters:"https://rickandmortyapi.com/api/character"
// episodes:"https://rickandmortyapi.com/api/episode"
// locations:"https://rickandmortyapi.com/api/location"

const page = 4;
const baseUrl = 'https://rickandmortyapi.com/api';

const loadCharacter = async() => {
    const res = await fetch(`${baseUrl}/character?page=${page}`)
    const data = await res.json(),
    limitData = data.results.slice(3, 9);
    return {results: limitData}
}

const loadLocation = async() => {
    const res = await fetch(`${baseUrl}/location`)
    const data = await res.json(),
    limitData = data.results.slice(0, 10);
    return {result: limitData};
}

const loadEpisode = async() => {
    const res = await fetch(`${baseUrl}/episode?page=${page}`)
    return await res.json()
}

const loadAllWithPromiseAll = async() => {
    const [character, location, episode] = await Promise.all([
        loadCharacter(),
        loadLocation(),
        loadEpisode()
    ]);

    showCharacter(character.results);
    showLocation(location.result);
    // showEpisode(episode.results);
}

loadAllWithPromiseAll();

function showCharacter(characters) {

    const charContainer = document.getElementById('charContainer')
    // console.log('Characters: ', characters)

    characters.map(char => {
        const divChar = document.createElement('div')

        divChar.id = `character-${char.id}`
        divChar.innerHTML = `
            <img src="${char.image}" alt="Imagem de ${char.name}">

            <article class="description">
                <h3 class="name">
                    <a href="${char.url}">${char.name}</a> 
                </h3>

                <p class="info">
                    <span class="${char.status}"><span>
                    <strong>${char.status}</strong> - ${char.species}
                </p>

                <p class="info">
                    <span class="label">Last known location:</span>
                    <a href="${char.location.url}">${char.location.name}</a>
                </p>
                
                <p class="info">
                    <span class="label">First seen in:</span>
                    <a href="${char.origin.url}">${char.origin.name}</a>
                </p>
            </article>
        `;

        divChar.classList.add('character-box')
        charContainer.appendChild(divChar)
        divChar.addEventListener('click', async() => {
            goToCharacterPage(char.id)
        })
    })

}

function goToCharacterPage(id) {
    const idCrypted = encryptId(id)
    window.location.href = `./pages/character.html?id=${idCrypted}`
}

function encryptId(id) {
    return id.toString(36)
}

function showLocation(locations) {
    const locationContainer = document.getElementById('locationContainer')

    locations.map(location => {
        const divLocation = document.createElement('div')
        
        divLocation.innerHTML = `
            <p class="title">${location.name}</p>
            <p class="type">${location.type}</p>
            <p class="dimension">${location.dimension}</p>
            <p class="residents">${location.residents}</p>
        `;

        divLocation.classList.add('location-box')
        locationContainer.appendChild(divLocation)
    })

    console.log(locations)
}