var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})


var t1 = gsap.timeline()
t1.from(".logo",1,{
    y:200,
    opacity:0,
});
t1.from(".elmt",1,{
   y: 500,
   stagger: 0.2,
   opacity: 0,
});
t1.from(".img1 img", 1,{
    y: -170,
    scale: 1.4,
    stagger: 0.2,
    opacity: 0,
});

t1.from(".img1 img", 2,{
    y: 1,
    stagger: 0.2,
});

//reload();
/*function reload(){
t1.from(".img1 img", 3,{
    y: -170,
    stagger: 0.2,
});
reload();
}
*/


