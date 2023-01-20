let menuToggle = document.querySelector('.navbar-toggle');
let navigation = document.querySelector('.flex');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('open');
    navigation.classList.toggle('open');
}
