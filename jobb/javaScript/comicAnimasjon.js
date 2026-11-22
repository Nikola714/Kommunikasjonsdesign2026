function myFunction() {

    const comicBilder = [
        "./img/comic_1.png",
        "./img/comic_2.png",
        "./img/comic_3.png",
        "./img/comic_4.png"
    ];

    const comicTekster = [
        "En student jobber hardt for å skrive bacheloroppagve",
        "Sender inn sin bacheloroppgave",
        "Får bachelor, er fornøyd og er klar for jobb",
        "Men ingen jobb er klar for dem"
    ];
    const sider = [
        "1",
        "2",
        "3",
        "4"
    ];
    

    const animasjonsBilde = document.querySelector(".comic-animasjon");
    const undertekst = document.querySelector(".comic-tekst");    
    const comicSide = document.querySelector(".comic-side");
    console.log(comicSide);
    const comicContainer = document.querySelector(".comic-animasjon_figur");

    let nesteBilde = 0;
    let venter = false;
    comicSide.textContent = sider[nesteBilde];
    console.log("Nytt sidetall:", sider[nesteBilde]);

    comicContainer.addEventListener("wheel", (event) => {
        console.log("Scroll registrert:", event.deltaY);

        // Hindre at hele nettsiden scroller
        event.preventDefault();

        if (venter) return;

        // Scroll ned
        if (event.deltaY > 0 && nesteBilde < comicBilder.length - 1) {

            nesteBilde++;
            console.log("Neste bilde:", nesteBilde);

            animasjonsBilde.src = comicBilder[nesteBilde];
            undertekst.textContent = comicTekster[nesteBilde];
            comicSide.textContent = sider[nesteBilde];

        }

        // Scroll opp
        else if (event.deltaY < 0 && nesteBilde > 0) {

            nesteBilde--;

            animasjonsBilde.src = comicBilder[nesteBilde];
            undertekst.textContent = comicTekster[nesteBilde];
            comicSide.textContent = sider[nesteBilde]

        } else {
            return;
        }

        venter = true;

        setTimeout(() => {
            venter = false;
        }, 500);

    }, { passive: false });

}

myFunction();