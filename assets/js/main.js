// Tabs Login
var btnLogin = document.querySelector('.header__navbar-social-user');
var tabLogin = document.querySelector('.header__navbar-social-login');
var btnClose = document.querySelector('.left__close');
var modal = document.querySelector('.modal')
btnLogin.onclick = function(e) {
    tabLogin.style.transform = 'translateX(0)';
    tabLogin.style.opacity = '1';
    modal.style.display = 'block';
}

btnClose.onclick = function() {
    tabLogin.style.transform = 'translateX(100%)';
    tabLogin.style.opacity = '0';
    modal.style.display = 'none';
}

modal.onclick = function() {
    this.style.display = 'none';
    tabLogin.style.transform = 'translateX(100%)';
    tabLogin.style.opacity = '0';
}


// Tabs sign in/ sign up

var btnLogin = document.querySelector('.login_top-signin');
var btnRegister = document.querySelector('.login_top-signup');

var boxLogin = document.querySelector('.login__bottom');
var boxRegister = document.querySelector('.register__bottom');
btnLogin.onclick = function() {
    btnRegister.classList.remove('active')
    this.classList.add('active');
    boxRegister.style.display = 'none';
    boxLogin.style.display = 'block';
}
btnRegister.onclick = function() {
    btnLogin.classList.remove('active')
    this.classList.add('active');
    boxRegister.style.display = 'block';
    boxLogin.style.display = 'none';
}


function checked() {
    document.querySelector('input[name="girl"]').checked = true;
}
