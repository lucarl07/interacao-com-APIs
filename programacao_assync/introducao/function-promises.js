/* INTRODUÇÃO À PROGRAMAÇÃO ASSÍNCRONA */

// Funções com promessas:
async function multiplyWithDelay(x, y) {
    return x * y
}

multiplyWithDelay(3, 3)
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.log(`${err}`)
})



// Funções com promessas e assync await:
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