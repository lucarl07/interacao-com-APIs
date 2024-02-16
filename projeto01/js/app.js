document.addEventListener('DOMContentLoaded', function() {
    
    const url = "https://api.chucknorris.io/jokes/categories"
    
    fetch(url).then((response) => {
        if(!response.ok) {
            throw new Error('Erro ao receber os dados.')
        }

        return response.json()
    })
    .then((data) => {
        listCategories(data)
        getCategories(data)
    })
    .catch((err) => console.error(err))

})

function listCategories(array) {
    let list = '=:=:=:= CATEGORIES =:=:=:='

    array.forEach((category, index) => {
        if(index % 2 == 0) {
            list += `\n${index+1}. ${category}`

            if(category.length < 5) {
                list += `\t`  
            }
        } else {
            list += `\t${index+1}. ${category}`
        }
    })
    console.log(list)
}

function getCategories(categories) {

    const select = document.querySelector('#chooseCtg')
    
    categories.map((category) => {
        const options = document.createElement('option')
        
        options.innerHTML = `${category}`
        options.value = category
        select.appendChild(options)
    })

}

const btn = document.querySelector('#btnGetJoke')

btn.addEventListener('click', function() {

    const select = document.querySelector('#chooseCtg').value,
    url = `https://api.chucknorris.io/jokes/random?category=${select}`

    fetch(url).then(response => {
        if(!response.ok) {
            throw new Error('Erro ao receber os dados.')
        }

        return response.json()
    })
    .then(data => getJoke(data))
    .catch(err => console.error(err))
})

function getJoke(joke) {
    document.querySelector('#joke').innerHTML = joke.value
}