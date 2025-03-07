const buttons = document.querySelectorAll('.map-button, .map-button2');
const popup = document.getElementById('video-popup');
const video = document.getElementById('popup-video');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.getElementById('overlay');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const videoSrc = button.getAttribute('data-video');
        video.setAttribute('src', videoSrc);
        popup.style.display = 'block';
        overlay.style.display = 'block';
        video.play();
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    video.pause();
    video.currentTime = 0;
});

window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    }
});