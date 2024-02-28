const urlParams = new URLSearchParams(window.location.search)
const idParam = urlParams.get('id')
console.log(decryptId(idParam))

function decryptId(id) {
    return parseInt(id, 36)
}