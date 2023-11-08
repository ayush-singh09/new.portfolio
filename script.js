var menubtn = document.querySelector(".menu");
var menuScreen = document.querySelector(".menu-screen");
var close = document.querySelector(".ri-close-fill");
var curser = document.querySelector(".cur");
var pic = document.querySelector(".pic");
var extra = document.querySelector(".extra");



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener("mousemove",function(dets){

    gsap.to(".cur",{
        top : dets.clientY,
        left : dets.clientX
    })
})



function picMouseEvents(){
    pic.addEventListener("mousemove",function(dets){
    
        gsap.to(".extra",{
            top:dets.clientY-pic.getBoundingClientRect().top,
            left:dets.clientX-pic.getBoundingClientRect().left
        })
    })

    pic.addEventListener("mouseenter",function(){
        gsap.to('.extra',{
            scale:1,
            translateX:-50 + "%",
            translateY:-50 + "%"
        })
        gsap.to('.cur',{
            scale:0
        })

    })
    pic.addEventListener("mouseleave",function(){
        gsap.to('.extra',{
            scale:0
        })
        gsap.to('.cur',{
            scale:1
        })
        
    })
}
picMouseEvents();


var cap = document.querySelector(".cap");
var textArray = ["html", "display", "position", "flex","padding", "align", "margin"];
index=0;


function changeText() {
    cap.innerHTML = textArray[index];
    index = (index + 1) % textArray.length; // Wrap around the array
}

setInterval(changeText, 1000); // Change the text every 1 second


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
        top:-100 + "%"
    })

    setTimeout(function(){
        menuScreen.style.display = "none"
    },500)
});

menuScreen.style.height = window.innerHeight + 'px';
