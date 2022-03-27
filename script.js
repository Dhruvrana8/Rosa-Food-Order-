//Selecy Element Function
const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open')
});

// Scrool reveal

window.sr = ScrollReveal();
sr.reveal('.animation-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});
sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:300
});