const buttons = document.querySelectorAll('.map-button');
const popup = document.getElementById('video-popup');
const video = document.getElementById('popup-video');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.getElementById('overlay'); // Get the overlay

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const videoSrc = button.getAttribute('data-video');
        video.setAttribute('src', videoSrc);
        popup.style.display = 'block';
        overlay.style.display = 'block'; // Show the overlay
        video.play();
    });
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none'; // Hide the overlay
    video.pause();
    video.currentTime = 0;
});

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === overlay) { // Close when clicking on the overlay
        popup.style.display = 'none';
        overlay.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    }
});