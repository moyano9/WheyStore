
  const audio = document.getElementById('audio_fondo');
  const botonAudio = document.getElementById('boton_audio');

  if (audio && botonAudio) {
    let sonando = false;

    botonAudio.addEventListener('click', () => {
      if (!sonando) {
        audio.play();
        sonando = true;
        botonAudio.textContent = '⏸ Pausar música';
      } else {
        audio.pause();
        sonando = false;
        botonAudio.textContent = '▶ Música Ambiente';
      }
    });
  }
