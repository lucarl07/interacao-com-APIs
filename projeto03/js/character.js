/* Chamar a função de carregamento de página */
loadPage();

/* Função para carregar o personagem: */
async function loadCharacter(baseUrl, id) {
    try {
        // Testa um fetch do endpoint do personagem
        const response = await fetch(`${baseUrl}/${id}`)
        
        // Verifica se os dados foram recebidos
        if(!response.ok) {
            throw new Error('Erro ao carregar o personagem.')
        }

        // Retorna os dados em formato JSON
        return await response.json();
    } catch (error) {
        // Retorna um erro
        console.log(error)
        throw error;
    }
}

/* Função inicial: */
async function loadPage() {
    // Obter os parâmetros da URL e sua ID
    const urlParams = new URLSearchParams(window.location.search),
    idParam = urlParams.get('id');

    // Verificar se o ID foi encontrado
    if(!idParam) {
        console.error('ID não encontrado.')
        return;
    }

    // Decriptar o ID obtido
    const idDecrypted = decryptId(idParam);

    // Guardar o endpoint que acessa o personagem na API
    const urlBase = 'https://rickandmortyapi.com/api/character/';

    // Retornar as informações do personagem
    try {
        const character = await loadCharacter(urlBase, idDecrypted);
        console.log('Character: ', character)
    } catch (error) {
        console.log('Erro ao carregar o personagem.')
    }
}

/* Função para decriptar a ID em base 36: */
function decryptId(id) {
    return parseInt(id, 36)
}