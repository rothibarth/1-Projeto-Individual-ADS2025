document.getElementById('loginFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'login' && senha === '1234') {

        window.location.href = "pages/index.html";

    } else {
        alert('Usuário ou senha incorretos!');
    }
});
