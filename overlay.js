const overlay = document.getElementById('overlay');
const playButton = document.getElementById('play-button');
const backgroundAudio = document.getElementById('background-audio');

playButton.addEventListener('click', function() {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        overlay.style.display = 'none';
    } else {
        backgroundAudio.pause();
        overlay.style.display = 'flex';
    }
});