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


// window.onclick = function(e) {
//     tabLogin.style.transform = 'translateX(100%)';
//     tabLogin.style.opacity = '0';
// }