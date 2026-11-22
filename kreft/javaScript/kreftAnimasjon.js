
//lager en bildeanimasjon der flere bilder byttes automatisk

//Animasjon på toppen
//lager en liste med bilder
const kreftBilder_top = [
  "./img/image6_animation_top_mobile.png",
  "./img/image7_animation_top_mobile.png",
];

//koble animasjon til HTML-element med class="kreft-animasjon_top"
const animasjonsBilde_top = document.querySelector(".kreft-animasjon_top");

//bestemme hvilken bilde kommer først ved å skrive indeks kreftBilder liste
let nesteBilde_top = 0; //denne index har image6

setInterval(() => {
  setTimeout(() => {
    animasjonsBilde_top.src = kreftBilder_top[nesteBilde_top];

    
    nesteBilde_top = (nesteBilde_top + 1) % kreftBilder_top.length;
  }, 100); //forteller koden at den skal kjøre etter 50 millisekunder
}, 250); //sier hvor fort bildene skal endret seg




//Animasjon av folk som slår kreft

//lager en liste med bilder
const kreftBilder = [
  "./img/image1.png",
  "./img/image2.png",
  "./img/image3.png",
  "./img/image2.png",

];

//koble animasjon til HTML-element med class="kreft-animasjon"
const animasjonsBilde = document.querySelector(".kreft-animasjon");

//bestemme hvilken bilde kommer først ved å skrive indeks kreftBilder liste
let nesteBilde = 0; //denne index har image1

setInterval(() => {
  setTimeout(() => {
    animasjonsBilde.src = kreftBilder[nesteBilde];

    
    nesteBilde = (nesteBilde + 1) % kreftBilder.length;
  }, 100); //forteller koden at den skal kjøre etter 100 millisekunder
}, 250); //sier hvor fort bildene skal endret seg
