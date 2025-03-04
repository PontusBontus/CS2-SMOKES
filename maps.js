function expandMap(mapId) {
    const mapItem = document.getElementById(mapId).parentElement;
    mapItem.style.transform = 'scale(1.05)';
}

function shrinkMap(mapId) {
    const mapItem = document.getElementById(mapId).parentElement;
    mapItem.style.transform = 'scale(1)';
}