/* INTRODUÇÃO À PROGRAMAÇÃO ASSÍNCRONA */

// Utilizando setTimeout():
console.log('Esse é o primeiro console')

setTimeout(function() {
    console.log('Este é o terceiro console')
}, 1000)

console.log('Este é o segundo console')

// Utilizando setInterval():
setInterval(function() {
    console.log('Vou aparecer de novo em 2 segundos!')
}, 2000)