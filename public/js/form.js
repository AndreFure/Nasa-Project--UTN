console.log("hola programador");
//const validator = require('validator');  => no lo pude hacer funcionar
const feedback_span = document.getElementById("feedback");

const form = document.querySelector('form');
const usuario = document.querySelector('input[name="usuario"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(usuario.value);
  console.log(password.value);
  console.log(email.value);
  //const em = validator.isEmail(toString('email.value'));
  //console.log(em);
  feedback_span.innerHTML = "Enviado";
});

