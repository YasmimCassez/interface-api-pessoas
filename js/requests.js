const url_server = "http://localhost:3000";

function cadastrar() {
    console.log('Enviando dados ao servidor...');

    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
        nome: document.querySelector('[id="nome-pessoa"]').value,
        cpf: document.querySelector('[id="cpf"]').value,
        data_nascimento: document.querySelector('[id="data"]').value,
        telefone: document.querySelector('[id="Telefone"]').value,
        endereco: document.querySelector('[id="endereco"]').value,
        altura: document.querySelector('[id="altura"]').value,
        peso: document.querySelector('[id="peso"]').value
    }

    // Requisição para back-end
    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        // Depois de feita a requisição, o front-end irá receber um retorno do servidor
        .then(response => response.json())
        // Se toda a requisição deu certo, será informado no log
        .then(dados => {
            console.log('Resposta do servidor:', dados);
            // Faça algo com a resposta do servidor, se necessário
        })
        // Caso tenha algum tipo de erro na requisição, é lançada a excessão
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Trate os erros, se necessário
        });
}
function listarPessoas() {
    fetch(`${url_server}/pessoas`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}