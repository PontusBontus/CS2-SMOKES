const buttons = document.querySelectorAll('.map-button');
const popup = document.getElementById('video-popup');
const video = document.getElementById('popup-video');
const closeBtn = document.querySelector('.close-btn');

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const videoSrc = button.getAttribute('data-video');
    video.setAttribute('src', videoSrc);
    popup.style.display = 'block';
    video.play();
  });
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  video.pause();
  video.currentTime = 0;
});

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  }
});