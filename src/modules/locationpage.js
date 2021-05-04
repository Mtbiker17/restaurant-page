function loadLocationPage(){
    let locationContainer = document.createElement('div');
    locationContainer.classList.add('locationContainer');

    let informationContainer = document.createElement('div');
    let mapContainer = document.createElement('div');
    locationContainer.appendChild(informationContainer);
    locationContainer.appendChild(mapContainer);
    informationContainer.textContent = "Hello"
    mapContainer.textContent = "hello";



    return locationContainer;
}

export { loadLocationPage }