// Yasmin Siqueira Lobo
document.getElementById('formComentario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do campo de comentário
    var comentario = document.getElementById('comentario').value;

    // Cria um novo item de lista para o comentário
    var novoComentario = document.createElement('li');
    novoComentario.textContent = comentario;

    // Adiciona o novo comentário à lista de comentários
    var listaComentarios = document.getElementById('listaComentarios');
    listaComentarios.appendChild(novoComentario);

    // Limpa o campo de comentário
    document.getElementById('comentario').value = '';
});
