
const stickman = document.querySelector(".stickman");

const tekstOmrader = document.querySelectorAll(".tekst-stigman");
let vinkAnimasjon = null;
let vinklerMed = false;
let footerErSynlig = false;

function stoppVinkAnimasjon() {
  if (vinkAnimasjon) {
    clearInterval(vinkAnimasjon);
    vinkAnimasjon = null;
  }
  vinklerMed = false;
}

function startVinkAnimasjon() {
  stoppVinkAnimasjon();
  vinklerMed = false;
  stickman.src = "./img/stickman_6.png";
  vinkAnimasjon = setInterval(() => {
    vinklerMed = !vinklerMed;
    stickman.src = vinklerMed
      ? "./img/stickman_7.png"
      : "./img/stickman_6.png";
  }, 450);
}

const stickmanDesktop = [
  "./img/stickman_1.png",
  "./img/stickman_2.png",
  "./img/stickman_3.png",
  "./img/stickman_4.png",
  "./img/stickman_5.png",
  "./img/stickman_6.png",
  "./img/stickman_7.png"
];

const stickmanMobile = [
  "./img/mobile_stickman_1.png",
  "./img/mobile_stickman_2.png",
  "./img/mobile_stickman_3.png",
  "./img/mobile_stickman_4.png",
  "./img/mobile_stickman_5.png"
];

function byttStickman(klasseNummer) {
  if (klasseNummer >= 25) {
    startVinkAnimasjon();
    stickman.classList.add("synlig");
    return;
  }

  stoppVinkAnimasjon();

  let bildeNummer;

  if (klasseNummer >= 1 && klasseNummer <= 9) {
    bildeNummer = 0;
  } else if (klasseNummer >= 10 && klasseNummer <= 13) {
    bildeNummer = 1;
  } else if (klasseNummer >= 14 && klasseNummer <= 22) {
    bildeNummer = 2;
  } else if (klasseNummer === 23) {
    bildeNummer = 3;
  } else if (klasseNummer === 24) {
    bildeNummer = 4;
  } else if (klasseNummer >= 25) {
    bildeNummer = window.matchMedia("(max-width: 600px)").matches ? 4 : 6;
  } else {
    return;
  }

  const bilder = window.matchMedia("(max-width: 600px)").matches
    ? stickmanMobile
    : stickmanDesktop;

  stickman.src = bilder[bildeNummer];
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {

      tekstOmrader.forEach((omrade) => {
        omrade.classList.remove("aktiv");
      });

      entry.target.classList.add("aktiv");

      const klasse = [...entry.target.classList].find(c =>
        /^stickman\d+$/.test(c)
      );

      const klasseNummer = Number(klasse.replace("stickman", ""));

      byttStickman(klasseNummer);
      stickman.classList.toggle("synlig", !footerErSynlig);
    }
  });
}, {
  threshold: [0.35, 0.6]
});

tekstOmrader.forEach((omrade) => {
  observer.observe(omrade);
});

const sisteAvsnitt = document.querySelector(".stickman25");
let sisteAvsnittHarVistSeg = false;

const sisteAvsnittObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sisteAvsnittHarVistSeg = true;
    } else if (sisteAvsnittHarVistSeg) {
      stickman.classList.remove("synlig");
      stoppVinkAnimasjon();
    }
  });
}, {
  threshold: 0
});

sisteAvsnittObserver.observe(sisteAvsnitt);

const info = document.querySelector("#info");

const infoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      stickman.classList.remove("synlig");
      stoppVinkAnimasjon();
    }
  });
}, {
  threshold: 0
});

infoObserver.observe(info);

const footer = document.querySelector("#bottom");

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    footerErSynlig = entry.isIntersecting;

    if (entry.isIntersecting) {
      stickman.classList.remove("synlig");
      stoppVinkAnimasjon();
    }
  });
}, {
  threshold: 0
});

footerObserver.observe(footer);
