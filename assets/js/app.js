let menuToggle = document.querySelector('.navbar-toggle');
let navigation = document.querySelector('.flex');
let html = document.querySelector('body');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('open');
    navigation.classList.toggle('open');
    html.classList.toggle('overflow')
}



$('.slide').slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
});
          