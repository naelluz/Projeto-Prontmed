function show() {
    var p = document.getElementById('pass');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pass');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

function Login() {

    var login = document.getElementById("mail").value;
    var senha = document.getElementById("pass").value;

    if (login == "admin@prontmed.com.br" && senha == "admin1234*" || login == "secretaria@prontmed.com.br" && senha == "secretaria1234*") {
        location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
}
