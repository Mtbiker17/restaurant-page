function loadLocationPage() {
    let locationContainer = document.createElement('div');
    locationContainer.classList.add('locationContainer');

    let mapContainer = document.createElement('div');
    let portland = document.createElement('img');
    portland.setAttribute('src', 'images/portland.png')
    portland.setAttribute("height", "600");
    portland.setAttribute("width", "700");
    portland.setAttribute("alt", "portland");
    portland.classList.add('portland');
    mapContainer.appendChild(portland);

    let informationContainer = document.createElement('div');
    informationContainer.classList.add('informationContainer');
    
    let addressContainer = document.createElement('div');
    addressContainer.classList.add('addressContainer');
    
    let mapIcon = document.createElement('img');
    mapIcon.setAttribute('src', 'images/ping.png')
    mapIcon.setAttribute('height', '50px' )
    mapIcon.setAttribute('width', '50px');
   
     let address = document.createElement('div');
    address.classList.add('address');
    address.textContent = "555 Fore Street, Portland, Maine"
    
    let phoneContainer = document.createElement('div');
    phoneContainer.classList.add('addressContainer');
    
    let phoneIcon = document.createElement('img');
    phoneIcon.setAttribute('src', 'images/phoneIcon.png');
    phoneIcon.setAttribute('height', '40px');
    phoneIcon.setAttribute('width', '40px');

    let phone = document.createElement('div');
    phone.classList.add('address');
    phone.textContent = "123-555-1234"

    let hoursContainer = document.createElement('div');
    hoursContainer.classList.add('addressContainer');
    
    let hoursIcon = document.createElement('img');
    hoursIcon.setAttribute('src', 'images/hoursIcon.png');
    hoursIcon.setAttribute('height', '50px');
    hoursIcon.setAttribute('width', '50px');

    let hours = document.createElement('div');
    hours.classList.add('address');
    hours.textContent = "Mon-Thurs: 12p-11p Fri-Sun:11a-11p"
    

    addressContainer.appendChild(mapIcon);
    addressContainer.appendChild(address);

    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phone);

    hoursContainer.appendChild(hoursIcon);
    hoursContainer.appendChild(hours);

    informationContainer.appendChild(addressContainer);
    informationContainer.appendChild(phoneContainer);
    informationContainer.appendChild(hoursContainer);
    locationContainer.appendChild(mapContainer);
    locationContainer.appendChild(informationContainer);


    return locationContainer;
}

export { loadLocationPage }