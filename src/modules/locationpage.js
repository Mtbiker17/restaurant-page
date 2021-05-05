function loadLocationPage() {
    let locationContainer = document.createElement('div');
    locationContainer.classList.add('locationContainer');

    let mapContainer = document.createElement('div');
    let portland = document.createElement('img');
    portland.setAttribute('src', '/dist/images/portland.png')
    portland.setAttribute("height", "600");
    portland.setAttribute("width", "700");
    portland.setAttribute("alt", "portland");
    portland.classList.add('portland');
    mapContainer.appendChild(portland);

    let informationContainer = document.createElement('div');
    informationContainer.classList.add('informationContainer');
    let addressContainer = document.createElement('div');
    addressContainer.classList.add('addressContainer');
    let icon1 = document.createElement('img');
    icon1.setAttribute('src', '/dist/images/ping.png')
    icon1.setAttribute('height', '50px' )
    icon1.setAttribute('width', '50px');
    let address = document.createElement('div');
    address.textContent = "Hope this worked!"
    addressContainer.appendChild(icon1);
    addressContainer.appendChild(address);

    locationContainer.appendChild(mapContainer);
    locationContainer.appendChild(informationContainer);


    return locationContainer;
}

export { loadLocationPage }