// Yasmin Siqueira Lobo
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    Swal.fire({
        title: 'Sucesso!',
        text: 'Envio com sucesso!',
        icon: 'success',
        confirmButtonColor: '#28a745'
    });


    document.getElementById('feedbackForm').reset();
});
