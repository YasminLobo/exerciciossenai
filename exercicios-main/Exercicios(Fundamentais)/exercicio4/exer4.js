// Yasmin Siqueira Lobo
document.getElementById('adicionarLinha').addEventListener('click', function() {
    // Obtém a tabela pelo ID
    var tabela = document.getElementById('minhaTabela').getElementsByTagName('tbody')[0];

    // Cria uma nova linha
    var novaLinha = tabela.insertRow();

    // Cria novas células e adiciona conteúdo a elas
    var novaCelula1 = novaLinha.insertCell(0);
    var novaCelula2 = novaLinha.insertCell(1);
    var novaCelula3 = novaLinha.insertCell(2);

    novaCelula1.innerHTML = 'Novo Dado 1';
    novaCelula2.innerHTML = 'Novo Dado 2';
    novaCelula3.innerHTML = 'Novo Dado 3';

    // Alterna as cores das linhas
    var linhas = tabela.getElementsByTagName('tr');
    for (var i = 0; i < linhas.length; i++) {
        if (i % 2 === 0) {
            linhas[i].style.backgroundColor = '#ffffff';
        } else {
            linhas[i].style.backgroundColor = '#f2f2f2';
        }
    }
});
