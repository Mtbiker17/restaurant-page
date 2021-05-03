function createNavbar() {
    let navbar = document.createElement('div');
    navbar.setAttribute("id", 'navbar');
    navbar.classList.add('navbar');

    let home = document.createElement('div');
    home.classList.add('navItems');
    home.textContent = "Home";
    navbar.appendChild(home);

    /*home.addEventListener('click', () => {
        //loadHomePage
    })*/

    let about = document.createElement('div');
    about.classList.add('navItems');
    about.textContent = "About";
    navbar.appendChild(about);
    /* about.addEventListener('click', () => {
         //loadAboutPage
     }) */

    let menu = document.createElement('div');
    menu.classList.add('navItems');
    menu.textContent = "Menu";
    navbar.appendChild(menu);
    /*menu.addEventListener('click', () => {
        //loadMenuPage
    })*/

    let location = document.createElement('div');
    location.classList.add('navItems');
    location.textContent = "Location + Info";
    navbar.appendChild(location);
    /*location.addEventListener('click', () => {
        //loadLocationPage
    })*/
    return navbar;
};

function createTitle() {
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "DENIZEN";
    return title;
};

function createSlogan() {
    let slogan = document.createElement('div');
    slogan.classList.add('slogan');
    let definition = document.createElement('div');
    let line = document.createElement('div');
    slogan.appendChild(definition);
    slogan.appendChild(line);
    definition.textContent = "|| denizen (noun). a person who inhabits a particular place."
    line.textContent = "* Local flair from local fare *"
    return slogan;
};

export {
    createNavbar,
    createTitle,
    createSlogan
};











