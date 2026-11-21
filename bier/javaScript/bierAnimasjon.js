//Animasjon på toppen
//lager en liste med bilder
const bieBilder_top = [
  "./img/img1.png",
  "./img/img2.png",
];

//koble animasjon til HTML-element med class="bie-animasjon_top"
const animasjonsBilde_top = document.querySelector(".bie-animasjon_top");

//bestemme hvilken bilde kommer først ved å skrive indeks bieBilder liste
let nesteBilde_top = 0; //denne index har img1

setInterval(() => {
  setTimeout(() => {
    animasjonsBilde_top.src = bieBilder_top[nesteBilde_top];

    
    nesteBilde_top = (nesteBilde_top + 1) % bieBilder_top.length;
  }, 100); //forteller koden at den skal kjøre etter 50 millisekunder
}, 250); //sier hvor fort bildene skal endret seg

