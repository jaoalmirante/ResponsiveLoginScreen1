document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === 'jaoalmirante@gmail.com' && password === 'senha') {
            mostrarAviso('success', 'Login bem-sucedido!');
            form.reset();
        } else {
            mostrarAviso('error', 'Email ou senha incorretos.');
        }
    });

    function mostrarAviso(tipo, mensagem) {
        var aviso = document.getElementById('aviso');
        aviso.textContent = mensagem;
        aviso.className = tipo;
        aviso.style.display = 'block';

        setTimeout(function () {
            aviso.style.display = 'none';
        }, 3000);
    }
});
