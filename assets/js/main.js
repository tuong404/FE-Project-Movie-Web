const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Tabs Login
var btnLogin = $('.header__navbar-social-user');
var tabLogin = $('.header__navbar-social-login');
var btnClose = $('.left__close');
var modal = $('.modal')
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

var btnLogin = $('.login_top-signin');
var btnRegister = $('.login_top-signup');

var boxLogin = $('.login__bottom');
var boxRegister = $('.register__bottom');

var line = $('.line');

line.style.left = btnLogin.offsetLeft + 'px';
line.style.width = btnLogin.offsetWidth + 'px';


btnLogin.onclick = function() {
    line.style.left = btnLogin.offsetLeft + 'px';
    line.style.width = btnLogin.offsetWidth + 'px';

    boxRegister.style.display = 'none';
    boxLogin.style.display = 'block';
}
btnRegister.onclick = function() {
    line.style.left = btnRegister.offsetLeft + 'px';
    line.style.width = btnRegister.offsetWidth + 'px'; 

    boxRegister.style.display = 'block';
    boxLogin.style.display = 'none';
}
