/*
 * Function to make scroll animation on home page
 */
let description = document.getElementById("title");
let homeSec = document.getElementById("home");
var init = screen.height*0.1;

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    description.style.top = -value*0.75 + 'px';

    homeSec.style.top = -init + value*0.3 + 'px';
})

/*
 * Gallery animation
 */
let gallery = document.getElementsByClassName("gallery");

let photo1 = document.getElementById("photo1");
photo1.onclick = function(){
    gallery[0].style.left = '0';
};
let photo2 = document.getElementById("photo2");
photo2.onclick = function(){
    gallery[0].style.left = '-50vw';
};
let photo3 = document.getElementById("photo3");
photo3.onclick = function(){
    gallery[0].style.left = '-100vw';
};
