import Toastify from 'toastify-js'

console.log("script login iniciado");

Toastify({
    text: "This is a toast",
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();

  console.log("Toast configurado");

//realiza validação de e-mail
function validateMail(field) {
    user = field.value.substring(0, field.value.indexOf("@"));
    domain = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if ((user.length >=1) &&
    (domain.length >=3) &&
    (user.search("@")==-1) &&
    (domain.search("@")==-1) &&
    (user.search(" ")==-1) &&
    (domain.search(" ")==-1) &&
    (domain.search(".")!=-1) &&
    (domain.indexOf(".") >=1)&&
    (domain.lastIndexOf(".") < domain.length - 1)) {
        document.getElementById("msgemail").innerHTML="E-mail válido";
        Toastify({
            text: "E-mail válido",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else {
        document.getElementById("mail").innerHTML="<font color='red'>E-mail inválido </font>";
        Toastify({
            text: "Por favor insira um e-mail válido",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

}

function validate_pass() {

}

function validate_login() {
    var mail = login.mail;
    
    if(mail.value == "") {
        sforce
    } 
}

function show_password() {

}

function access_button() {

}

