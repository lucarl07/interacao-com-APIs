document.addEventListener('DOMContentLoaded', () => {
    const baseURL = "https://swapi.dev/api/people/"

    fetch(baseURL).then(response => {
        if(!response.ok) {
            throw new Error(`Erro de rede! Código: ${response.status}`)
        }

        return response.json()
    })
    .then(data => renderCharacters(data))
    .catch(err => console.log(err))

})

function renderCharacters(items) {
    const container = document.getElementById('charContainer')
    
    items.results.forEach((item, index) => {
        const divCharacters = document.createElement('div')
        
        divCharacters.innerHTML = `
            <div class="char-box">
                <img src="./image/perso${index}.png" alt="Foto de ${item.name}">
                <div>
                    <h3>${item.name}</h3>
                </div>
            </div>
        `;
        divCharacters.addEventListener('click', () => {
            detailCharacter(index)
        })

        divCharacters.classList.add('character')
        container.appendChild(divCharacters);
    });
}

function detailCharacter(i) {
    window.location.href = `./pages/person.html?index=${i}`
}