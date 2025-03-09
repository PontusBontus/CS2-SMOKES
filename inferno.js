//Kod av Pontus

// Hämtar alla knappar
const buttons = document.querySelectorAll('.map-button, .map-button2');

// Hämtar popup, video, stäng-knapp och overlay
const popup = document.getElementById('video-popup');
const video = document.getElementById('popup-video');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.getElementById('overlay');

// Lägger till listener på varje knapp
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Hämtar video-URL och använder url:en för att uppdatera källan för videospelaren.
        const videoSrc = button.getAttribute('data-video');
        video.setAttribute('src', videoSrc);
        
        // Gör popup och overlay synliga samt spelar upp videon
        popup.style.display = 'block';
        overlay.style.display = 'block';
        video.play();
    });
});

// Stänger popupen vid klick på stäng-knappen
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Döljer popupen
    overlay.style.display = 'none'; // Döljer overlayen
    video.pause(); // Pausar videon
    video.currentTime = 0; // Återställer videon från början
});

// Stänger popupen om när man klickar på overlayen
window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    }
});