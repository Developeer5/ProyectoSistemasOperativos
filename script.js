const contenedor = document.querySelector('.wrapper');
const enlaceLogin = document.querySelector('.logins-link');
const enlaceRegistro = document.querySelector('.register-link');
const botonPopup = document.querySelector('.btnLogin-popup');
const cerrarIcono = document.querySelector('.icon-close');
const formularioLogin = document.querySelector('.form-box.login');
const formularioRegistro = document.querySelector('.form-box.register');

botonPopup.addEventListener('click', () => {
  contenedor.classList.add('active-popup');
  formularioLogin.style.display = 'block';
  formularioRegistro.style.display = 'none';
});

cerrarIcono.addEventListener('click', () => {
  contenedor.classList.remove('active-popup');
  formularioLogin.style.display = 'none';
  formularioRegistro.style.display = 'none';
});

enlaceRegistro.addEventListener('click', () => {
  formularioLogin.style.display = 'none';
  formularioRegistro.style.display = 'block';
});

enlaceLogin.addEventListener('click', () => {
  formularioRegistro.style.display = 'none';
  formularioLogin.style.display = 'block';
});
