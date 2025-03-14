document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificação de credenciais válidas
    if ((username === "ducalofc" && password === "12345") || 
        (username === "lorran" && password === "12345") || 
        (username === "lofy" && password === "12345")) {
        
        window.location.href = "inicio.html"; // Redireciona para a página inicial
    } else {
        alert("Usuário ou senha inválidos"); // Mensagem de erro
    }
});

function mostrarSenha() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }
}
