//Kod av Pontus

function expandMap(mapId) {
    const mapItem = document.getElementById(mapId).parentElement; // Hämtar elementet (map-item) till den angivna kartan
    mapItem.style.transform = 'scale(1.05)'; // Förstorar kartan när man hovrar på bilden
}

function shrinkMap(mapId) {
    const mapItem = document.getElementById(mapId).parentElement; // Hämtar elementet (map-item) till den angivna kartan
    mapItem.style.transform = 'scale(1)'; // Återställer storleken när muspekaren lämnar bilden
}