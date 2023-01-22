let menuToggle = document.querySelector('.navbar-toggle');
let navigation = document.querySelector('.flex');
let html = document.querySelector('body');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('open');
    navigation.classList.toggle('open');
    html.classList.toggle('overflow')
}

function move(){
    var IE = document.all;
    
    var tempX = 0;
    var tempY = 0;

    var element=document.getElementById("cursor");
    
    document.onmousemove=function getMouseXY(abc) {
        if (IE) { // grab the x-y pos.s if browser is IE
            tempX = event.clientX;
            tempY = event.clientY;
        }
        else { // grab the x-y pos.s if browser is NS
            tempX = abc.pageX;
            tempY = abc.pageY;
        }
        
        element.style.marginLeft = tempX + "px";
        element.style.marginTop = tempY + "px";
    }
}
