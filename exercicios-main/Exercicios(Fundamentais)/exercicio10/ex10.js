// Yasmin Siqueira Lobo
function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar o modal clicando fora da caixa
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
