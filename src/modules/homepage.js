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


    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.classList.add('navItems');
    menu.textContent = "Menu";
    navbar.appendChild(menu);


    let info = document.createElement('div');
    info.setAttribute('id', 'info');
    info.classList.add('navItems');
    info.textContent = "Location + Info";
    navbar.appendChild(info);

    return navbar
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
    slogan.appendChild(line);
    line.textContent = "* Local flair from local fare *"
    return slogan;
};

function initializeHomepage() {
    const content = document.getElementById('content');
    content.appendChild(createNavbar());
    content.appendChild(createTitle());
    content.appendChild(createSlogan());
}

export {
    createTitle,
    createSlogan,
    initializeHomepage,
}











