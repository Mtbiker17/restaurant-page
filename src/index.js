import { createSlogan, createTitle } from './modules/homepage.js'

//create navbar
function createNavbar() {
    let navbar = document.createElement('div');
    navbar.setAttribute("id", 'navbar');
    navbar.classList.add('navbar');

    let home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.classList.add('navItems');
    home.textContent = "Home";
    navbar.appendChild(home);

    let about = document.createElement('div');
    about.setAttribute('id', 'about');
    about.classList.add('navItems');
    about.textContent = "About";
    navbar.appendChild(about);
    /* about.addEventListener('click', () => {
         //loadAboutPage
     }) */

    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.classList.add('navItems');
    menu.textContent = "Menu";
    navbar.appendChild(menu);
    /*menu.addEventListener('click', () => {
        //loadMenuPage
    })*/

    let info = document.createElement('div');
    info.setAttribute('id', 'info');
    info.classList.add('navItems');
    info.textContent = "Location + Info";
    navbar.appendChild(info);
    /*location.addEventListener('click', () => {
        //loadLocationPage
    })*/
    return navbar
};

//homepage load
function initializeHomepage() {
    const content = document.getElementById('content');
    content.appendChild(createNavbar());
    content.appendChild(createTitle());
    content.appendChild(createSlogan());
}
initializeHomepage();

//clears current tab
function clearCurrentPage(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

//event listeners

home.addEventListener('click', () => {
    clearCurrentPage(content);
    initializeHomepage();
})

about.addEventListener('click', () => {
    clearCurrentPage(content);
    createNavbar();
})

menu.addEventListener('click', () => {
    console.log('clicked')
})

info.addEventListener('click', () => {
    console.log('clicked')
})