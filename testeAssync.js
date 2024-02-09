// INTRODUÇÃO À PROGRAMAÇÃO ASSÍNCRONA

// Utilizando setTimeout():
/* console.log('Esse é o primeiro console')

setTimeout(function() {
    console.log('Este é o terceiro console')
}, 1000)

console.log('Este é o segundo console') */

// Utilizando setInterval():
/* setInterval(function() {
    console.log('Vou aparecer de novo em 2 segundos!')
}, 2000) */

// Criando promessas:
/* const promessa = Promise.resolve(5 + 5)

console.log('Lógica que foi desenvolvida')

promessa.then(function(value) {
    console.log(`Soma: ${value}`)
    return value
})
.then((value) => {
    console.log(`Subtração por -2: ${value-2}`)
    return value
})
.then(value => console.log(`Dobro da soma: ${value * 2}`))

console.log('Código adicional') */

// Listando erros em promessas:
/* let mundialPalmeiras = 'nenhum'

let saudacao = Promise.resolve(mundialPalmeiras * 4)
.then(value => {
    if(Number.isNaN(value)) {
        throw new Error('Que mundial? 😂')
    }
}).catch((err) => {
    console.log(`Um erro ocorreu (${err}). Por favor, revisar os dados inseridos.`)
}) */

// Promessa dentro de função:
/* const num1 = isGreaterThan20(25)
const num2 = isGreaterThan20(18)

executePromise(num1)
executePromise(num2)

function isGreaterThan20(n) {
    return new Promise((resolve, reject) => {
        if(n > 20) {
            resolve(`O número ${n} é maior que 20.`)
        } else {
            reject(new Error(`O número ${n} é menor ou igual a 20.`))
        }
    })
}

function executePromise(e) {
    e.then(value => {
        console.log(`Resultado da requisição: \n${value}\n`)
    }).catch(err => {
        console.log(`Ocorreu um erro: \n${err}\n`)
    })
}   */

// Funções com promessas (async await):
// async function multiplyWithDelay(x, y) {
//     return x * y
// }

// multiplyWithDelay(3, 3)
// .then((value) => {
//     console.log(value)
// })
// .catch((err) => {
//     console.log(`${err}`)
// })

function delayedResponse() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolveste a promessa!')
        }, 3000)
    })
}

async function delayedCall() {
    console.log('Chamando a promessa e aguardando o retorno...')

    const resultado = await delayedResponse()

    console.log(`O resultado chegou: \n${resultado}`)
}

delayedCall();