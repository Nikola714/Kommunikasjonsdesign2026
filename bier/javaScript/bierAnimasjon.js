// Hver animasjon kobler sammen visningsvinduet, bildefilen og bildeframene.
const animasjoner = [
  //første animasjon - bie på toppen
    {
    vindu: document.querySelector(".bie-animasjon_top_vindu"),
    bilde: document.querySelector(".bie-animasjon_top"),
    bilder: ["./img/img1.png", "./img/img2.png"],
    bildeIndeks: 0,
  },

  //andre animasjon - bie over andre avsnitt
  {
    vindu: document.querySelector(".bie-animasjon_andre_vindu"),
    bilde: document.querySelector(".bie-animasjon_andre"),
    bilder: ["./img/img3.png", "./img/img4.png"],
    bildeIndeks: 0,
  },
];

// Denne artikkelen avgjør når bieanimasjonen skal byttes.
const nesteArtikkel = document.querySelector("#andre");

// -1 sørger for at første kall til visAnimasjon oppdaterer klassene.
let aktivAnimasjon = -1;

// Bytt bare klasser når den aktive animasjonen faktisk endres.
function visAnimasjon(indeks) {
  if (aktivAnimasjon === indeks) {
    return;
  }

  aktivAnimasjon = indeks;

  // CSS viser den aktive biegruppen og pauser den andre.
  animasjoner.forEach((animasjon, animasjonsIndeks) => {
    const erAktiv = animasjonsIndeks === aktivAnimasjon;
    animasjon.vindu.classList.toggle("is-active", erAktiv);
    animasjon.vindu.classList.toggle("is-paused", !erAktiv);
  });
}

function oppdaterAnimasjonVedScroll() {
  // Bytt animasjon når toppen av artikkel 2 når toppen av skjermen.
  const nesteArtikkelErNådd = nesteArtikkel.getBoundingClientRect().top <= 0;
  visAnimasjon(nesteArtikkelErNådd ? 1 : 0);
}

// Oppdater bildeframen til den aktive biegruppen og start på nytt ved siste bilde.
setInterval(() => {
  const animasjon = animasjoner[aktivAnimasjon];
  animasjon.bildeIndeks = (animasjon.bildeIndeks + 1) % animasjon.bilder.length;
  animasjon.bilde.src = animasjon.bilder[animasjon.bildeIndeks];
}, 250);

// Oppdater valg ved scrolling, og tillat scrolling uten å blokkere brukergrensesnittet.
window.addEventListener("scroll", oppdaterAnimasjonVedScroll, { passive: true });

// Beregn riktig animasjon på nytt hvis vindusstørrelsen endres.
window.addEventListener("resize", oppdaterAnimasjonVedScroll);

// Velg riktig animasjon med en gang siden lastes, også ved direkte lenke til artikkel 2.
oppdaterAnimasjonVedScroll();
