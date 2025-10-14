import player from './player.js';

window.onload = () => {
  // 🎶 Carga tu lista de canciones
  player.setPlaylist([
    'assets/music/song1.mp3',
    'assets/music/song2.mp3',
    'assets/music/song3.mp3'
  ]);

  // 🔹 Inicializa el reproductor
  player.initializePlayer();

  // 🎛️ Botones
  document.getElementById("playBtn").addEventListener("click", () => {
    player.initializerControlMedia(true);
  });

  document.getElementById("pauseBtn").addEventListener("click", () => {
    player.initializerControlMedia(false);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    player.nextSong();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    player.prevSong();
  });
};
