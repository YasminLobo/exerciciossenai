// Yasmin Siqueira Lobo
document.getElementById('formContato').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        event.preventDefault();
        alert('Por favor, preencha todos os campos.');
        return false; // Impede o envio do formulário
    } else {
        alert('Mensagem Enviada!');
    }
});
