function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  document.addEventListener('click', closePopupOutside);
}
  
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
  document.removeEventListener('click', closePopupOutside);
}

function closePopupOutside(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
    closePopup();
  }
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