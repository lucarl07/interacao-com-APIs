// characters:"https://rickandmortyapi.com/api/character"
// episodes:"https://rickandmortyapi.com/api/episode"
// locations:"https://rickandmortyapi.com/api/location"

const page = 1;
const baseUrl = 'https://rickandmortyapi.com/api';

const loadCharacter = async() => {
    const res = await fetch(`${baseUrl}/character?page=${page}`);
    const data = await res.json(),
    limitData = data.results.slice(0,9)
    return {results: limitData}
}
const loadLocation = async() => {
    const res = await fetch(`${baseUrl}/location?page=${page}`)
    return await res.json()
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
    // console.log('Locations: ', location.results)
    // console.log('Episodes: ', episode.results)
}

loadAllWithPromiseAll();

function showCharacter(characters) {

    const charContainer = document.getElementById('charContainer')
    console.log('Characters: ', characters)

    characters.map(char => {
        const divChar = document.createElement('div')
        
        divChar.innerHTML = `
            <img src="${char.image}" alt="Imagem de ${char.name}">
            <article class="description">
                <h3 class="name">${char.name}</h3>
                <p class="info">
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
    })

}