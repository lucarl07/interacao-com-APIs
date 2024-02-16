document.addEventListener('DOMContentLoaded', function() {
    
    const url = "https://api.chucknorris.io/jokes/categories"
    
    fetch(url).then((response) => {
        if(!response.ok) {
            throw new Error('Erro ao receber os dados.')
        }

        return response.json()
    })
    .then((data) => {
        let listCategories = '=:=:=:= CATEGORIES =:=:=:='

        data.forEach((category, index) => {
            if(index % 2 == 0) {
                listCategories += `\n${index+1}. ${category}`

                if(category.length < 5) {
                    listCategories += `\t`  
                }
            } else {
                listCategories += `\t${index+1}. ${category}`
            }
        })
        console.log(listCategories)

        gerarCategorias(data)
    })
    .catch((err) => console.log(err))

})

function gerarCategorias(categories) {

    const select = document.querySelector('#chooseCtg')
    
    categories.map((category) => {
        const options = document.createElement('option')
        
        options.innerHTML = `${category}`
        select.appendChild(options)
    })

}

