import { createTitle, createSlogan, initializeHomepage } from './modules/homepage.js'
import { loadAboutPage } from './modules/aboutpage.js';
import { loadMenuPage } from './modules/menupage';
initializeHomepage();

//clears current tab
function clearCurrentPage(content) {
    while (content.lastChild.id !== 'navbar') {
        content.removeChild(content.lastChild);
    }
}


//event listeners
let content = document.getElementById('content');
home.addEventListener('click', () => {
    clearCurrentPage(content);
    content.appendChild(createTitle());
    content.appendChild(createSlogan());
    console.log('home clicked')
})

about.addEventListener('click', () => {
    clearCurrentPage(content);
    content.appendChild(loadAboutPage());
    console.log('about clicked')
})

menu.addEventListener('click', () => {
    clearCurrentPage(content);
    content.appendChild(loadMenuPage());
    console.log('clicked')
})

info.addEventListener('click', () => {
    console.log('clicked')
})