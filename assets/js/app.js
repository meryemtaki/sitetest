let menuToggle = document.querySelector('.toggle-text');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
let textToggle = document.querySelector('.toggle-icon');
textToggle.onclick = function(){
    textToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
