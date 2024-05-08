const sliderContainer = document.querySelector('.slider-container');
const sliderContent = document.querySelector('.slider-content');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const firstContent = document.querySelector('.first-content');
const secondContent = document.querySelector('.second-content');

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let isTouchMoved = false;
const swipeThreshold = 50;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < 1) {
    currentIndex++;
    updateSlider();
  }
});

sliderContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
sliderContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
sliderContainer.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  isTouchMoved = false;
}

function handleTouchMove(e) {
  touchEndX = e.touches[0].clientX;
  isTouchMoved = true;
}

function handleTouchEnd() {
  if (!isTouchMoved) {
    return;
  }

  const touchDiffX = touchEndX - touchStartX;

  if (Math.abs(touchDiffX) > swipeThreshold) {
    if (touchDiffX > 0) {
      // Swiped right
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    } else {
      // Swiped left
      if (currentIndex < 1) {
        currentIndex++;
        updateSlider();
      }
    }
  }

  touchStartX = 0;
  touchEndX = 0;
  isTouchMoved = false;
}

function updateSlider() {
  if (currentIndex === 0) {
    firstContent.style.display = 'block';
    secondContent.style.display = 'none';
  } else {
    firstContent.style.display = 'none';
    secondContent.style.display = 'block';
  }
}

function openSecondContent() {
    currentIndex = 1;
    updateSlider();
  }

  function openFirstContent() {
    currentIndex = 0;
    updateSlider();
  }