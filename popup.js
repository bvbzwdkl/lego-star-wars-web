function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

const overlay = document.getElementById('overlay');
const playButton = document.getElementById('play-button');
const backgroundAudio = document.getElementById('background-audio');

// Show the overlay on page load
window.onload = function() {
  overlay.style.display = 'flex';
  document.body.classList.add('blur');
};

// Play/pause music and toggle overlay
playButton.addEventListener('click', function() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    overlay.style.display = 'none';
    document.body.classList.remove('blur');
  } else {
    backgroundAudio.pause();
    overlay.style.display = 'flex';
    document.body.classList.add('blur');
  }
});