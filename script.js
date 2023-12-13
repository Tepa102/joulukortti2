document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('kanvas');
    const ctx = canvas.getContext('2d');

    const taustakuva = new Image();
    taustakuva.src = 'puuvalkoinen.png';

    const pukki = new Image();
    pukki.src = 'joulupukki_kavelee.png';

    const image2 = new Image();
    image2.src = 'tahti_vilkkuu.png';

    const poro = new Image();
    poro.src = 'porokuva.png'

    const audio = new Audio();
    audio.src = 'silent-night.mp3';

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = 'Pause Audio';
        } else {
            audio.pause();
            playButton.innerHTML = 'Play Audio';
        }
    });

    let frameIndex = 0;
    const frameWidth = 100;
    const totalFrames = 13;

    let x = 50; // Pukin x-koordinaatti
    let y = canvas.height - 100; // Pukin y-koordinaatti

    // Aseta animaationopeus ja aloita animaatio
    const animationSpeed = 50; // Millisekunnit per kehys
    setInterval(animate, animationSpeed);

    function animate() {
        // Piirrä taustakuva, ok
        ctx.drawImage(taustakuva, 0, 0, canvas.width, canvas.height);

        // Piirrä poro, ok
        const poroY = canvas.height - 150; // Voit muuttaa tätä arvoa tarpeen mukaan
        ctx.drawImage(poro, -140, poroY - 50, 300, 200);

        // Liikuta pukkia vasemmalta oikealle ja takaisin
        x += 2; // Voit muuttaa tätä liikkumisnopeutta tarpeen mukaan

        // Käännä pukki, kun se saavuttaa kankaan reunat
        if (x > canvas.width) {
            x = -frameWidth * 1.7;
        }

        // Piirrä pukki
        ctx.drawImage(
            pukki,
            frameIndex * ((pukki.width) / totalFrames),
            0,
            pukki.width / totalFrames,
            pukki.height,
            x,
            y -55,
            frameWidth * 1.7,
            100 * 1.7
        );

        // Päivitä frameIndex seuraavaa kehystä varten
        frameIndex = (frameIndex + 1) % totalFrames;

        // Piirrä tekstit
        drawText();
        drawStar();
    }

    // Piirrä tähti
    function drawStar() {
        const starFrameWidth = image2.width *.8; // Olettaen, että kaksi framea
        const sourceX = frameIndex * starFrameWidth;
        ctx.drawImage(image2, sourceX, 0, starFrameWidth, image2.height *.4, 200, 150, frameWidth * 1.2, image2.height * 1.2);
    }

    // Piirrä tekstit
    function drawText() {
        // Asetetaan tekstin väri
        ctx.fillStyle = "red";
        // Asetetaan Google Font
        ctx.font = "42px 'Meie Script'";

        ctx.textAlign = 'center';
        let text1 = 'Hyvää Joulua';
        let text2 = 'Onnellista';
        let text3 = 'Uutta Vuotta 2024';

        ctx.strokeStyle = 'black';  // Reunaviivan väri
        ctx.lineWidth = 2;
        ctx.strokeText(text1, canvas.width / 2, 60);   
        ctx.fillText(text1, canvas.width / 2, 60);
        ctx.strokeText(text2, canvas.width / 2, 100);
        ctx.fillText(text2, canvas.width / 2, 100);
        ctx.strokeText(text3, canvas.width / 2, 140);
        ctx.fillText(text3, canvas.width / 2, 140);
        ctx.font = "25px 'Browier'";
        ctx.lineWidth = 1.5

        /*ctx.fillText('Noora, Tiia ja Teemu', canvas.width / 2, 210);*/
    }

    // Piirrä tekstit ja muu alkuperäinen koodi
    taustakuva.onload = function () {
        ctx.drawImage(taustakuva, 0, 0, canvas.width, canvas.height);
    }
});