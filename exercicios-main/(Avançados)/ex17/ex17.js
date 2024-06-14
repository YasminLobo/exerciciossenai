// Yasmin Siqueira Lobo
document.addEventListener('DOMContentLoaded', function() {
  
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        showWelcomeMessage();
    }

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        login();
    });
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

 
    const validUsername = 'min';
    const validPassword = 'yas';

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login bem-sucedido! Bem-vindo!');
        showWelcomeMessage();
    } else {
        alert('Usuário ou senha inválidos.');
        showErrorMessage('Usuário ou senha inválidos.');
    }
}

function showWelcomeMessage() {
    document.body.innerHTML = `
        <div class="login-container">
            <h1>Bem-vindo!</h1>
            <button onclick="logout()">Sair</button>
        </div>
    `;
}

function showErrorMessage(message) {
    const loginMessage = document.getElementById('loginMessage');
    loginMessage.textContent = message;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    location.reload();
}
