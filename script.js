const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var cap = document.querySelector(".cap");
var textArray = ["html", "display", "position", "flex","padding", "align", "margin"];
index=0;


function changeText() {
    cap.innerHTML = textArray[index];
    index = (index + 1) % textArray.length; // Wrap around the array
}

setInterval(changeText, 1000); // Change the text every 1 second

var menubtn = document.querySelector(".menu");
var menuScreen = document.querySelector(".menu-screen")
var close = document.querySelector(".ri-close-fill")

menubtn.addEventListener('click',function(){
    menuScreen.style.display = "flex"
    

    setTimeout(function(){
        gsap.to(".menu-screen",{
            top:0,
        })
    },100)
    // menuScreen.style.top = "0"
});

close.addEventListener('click',function(){
    gsap.to(".menu-screen",{
        top:-80 + "%"
    })

    setTimeout(function(){
        menuScreen.style.display = "none"
    },100)
    // menuScreen.style.top = "-100%"
});

// menuScreen.style.height = window.innerHeight + 'px';
