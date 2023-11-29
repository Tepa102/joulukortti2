// Haetaan canvas-elementti
const canvas = document.getElementById("kanvas");
// Haetaan 2D-konteksti
const ctx = canvas.getContext("2d");

const taustakuva = new Image();
taustakuva.src = 'puuvalkoinen.png';

/*const audio = new Audio('silent-night.mp3');
audio.play();*/

taustakuva.onload = function() {
    ctx.drawImage(taustakuva, 0, 0, canvas.width, canvas.height);

    // Asetetaan tekstin väri
    ctx.fillStyle = "red";

    // Asetetaan Google Font
    ctx.font = "40px 'Meie Script'";

    ctx.textAlign = 'center';
    ctx.fillText('Hyvää joulua', canvas.width / 2, 40);
    ctx.fillText('Onnellista', canvas.width / 2, 80);
    ctx.fillText('Uutta Vuotta 2024', canvas.width / 2, 120);
    ctx.font = "20px 'Meie Script'";
    ctx.fillText('Toivottavat:', canvas.width / 2, 150);
    ctx.fillText('Terttu, Mikko', canvas.width / 2, 180);
    ctx.fillText('Noora, Tiia ja Teemu', canvas.width / 2, 210);

}

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('myCanvas');
    var playButton = document.getElementById('playButton');
 
  
    var audio = new Audio();
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
  });
  