// Haetaan canvas-elementti
const canvas = document.getElementById("kanvas");
// Haetaan 2D-konteksti
const ctx = canvas.getContext("2d");

const taustakuva = new Image();
taustakuva.src = 'puuvalkoinen.png';

taustakuva.onload = function() {
    ctx.drawImage(taustakuva, 0, 0, canvas.width, canvas.height);

    // Asetetaan tekstin väri
    ctx.fillStyle = "red";

    // Asetetaan Google Font
    ctx.font = "40px 'Meie Script'";


    // Tekstin sisältö
    const teksti1 = "Hyvää joulua!";
    const teksti2 = "Onnellista";
    const teksti3 = "Uutta Vuotta 2024";
    const teksti4 = "                    Toivottavat:";
    const teksti5 = "                                                                  Terttu, Mikko, Noora, Tiia ja Teemu";

    // Lasketaan x-koordinaatti, jotta teksti sijoittuu keskelle
    const x1 = (canvas.width - ctx.measureText(teksti1).width) / 2;
    const x2 = (canvas.width - ctx.measureText(teksti2).width) / 2;
    const x3 = (canvas.width - ctx.measureText(teksti3).width) / 2;
    const x4 = (canvas.width - ctx.measureText(teksti4).width) / 2;
    const x5 = (canvas.width - ctx.measureText(teksti5).width) / 2;

    // Lasketaan y-koordinaatti, jotta teksti sijoittuu pystysuunnassa keskelle
    const y1 = canvas.height / 2 -260;  // Alenna y-koordinaattia ensimmäiselle riville
    const y2 = canvas.height / 2 -220;
    const y3 = canvas.height / 2 -180;  // Nosta y-koordinaattia kolmannelle riville
    const y4 = canvas.height / 2 -140;
    const y5 = canvas.height / 2 -100;

    // Asetetaan eri fonttikoot kullekin riville
    ctx.font = "40px 'Meie Script'";
    ctx.fillText(teksti1, x1, y1);

    ctx.font = "40px 'Meie Script'";
    ctx.fillText(teksti2, x2, y2);

    ctx.font = "40px 'Meie Script'";
    ctx.fillText(teksti3, x3, y3);

    ctx.font = "25px 'Meie Script'";
    ctx.fillText(teksti4, x4, y4);

    ctx.font = "25px 'Meie Script'";
    ctx.fillText(teksti5, x5, y5);

}