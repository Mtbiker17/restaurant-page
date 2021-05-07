function loadLocationPage() {
    let locationContainer = document.createElement('div');
    locationContainer.classList.add('locationContainer');

    let mapContainer = document.createElement('div');
    let portland = document.createElement('img');
    portland.setAttribute('src', './images/portland.png')
    portland.setAttribute("height", "600");
    portland.setAttribute("width", "700");
    portland.setAttribute("alt", "portland");
    portland.classList.add('portland');
    mapContainer.appendChild(portland);

    let informationContainer = document.createElement('div');
    informationContainer.classList.add('informationContainer');

    function createInfo(imageSource, text, size) {
        let container = document.createElement('div');
        container.classList.add('addressContainer');
        let icon = document.createElement('img');
        icon.setAttribute('src', `${imageSource}`);
        icon.setAttribute('height', `${size}px`);
        icon.setAttribute('width', `${size}px`);
        let infoText = document.createElement('div');
        infoText.classList.add('address');
        infoText.textContent = text;

        container.appendChild(icon);
        container.appendChild(infoText);
        return container;
    }

    informationContainer.appendChild(createInfo(
        './images/ping.png',
        "555 Fore Street, Portland, Maine",
        '50px'
    ));

    informationContainer.appendChild(createInfo(
        './images/phoneIcon.png',
        "123-555-1234",
        '40px'
    ));

    informationContainer.appendChild(createInfo(
        './images/hoursIcon.png',
        "Mon-Thurs: 12p-11p Fri-Sun:11a-11p",
        '50px'
    ));

    locationContainer.appendChild(mapContainer);
    locationContainer.appendChild(informationContainer);

    return locationContainer;
}

export { loadLocationPage }