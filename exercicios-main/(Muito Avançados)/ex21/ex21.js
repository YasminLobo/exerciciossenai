// Yasmin Siqueira Lobo
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        const confirmationMessage = `Reserva confirmada para ${date} às ${time}.`;
        document.getElementById('confirmation').innerText = confirmationMessage;
        alert(confirmationMessage);
    } else {
        const errorMessage = `Por favor, selecione uma data e hora válidas.`;
        document.getElementById('confirmation').innerText = errorMessage;
        alert(errorMessage);
    }
});

