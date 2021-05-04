import { createTitle, createSlogan, initializeHomepage } from './modules/homepage.js'
import { loadAboutPage } from './modules/aboutpage.js';
import { loadMenuPage } from './modules/menupage';
import { loadLocationPage } from './modules/locationpage'
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
})

about.addEventListener('click', () => {
    clearCurrentPage(content);
    content.appendChild(loadAboutPage());
})

menu.addEventListener('click', () => {
    clearCurrentPage(content);
    content.appendChild(loadMenuPage());
})

info.addEventListener('click', () => {
    clearCurrentPage(content);
    content.appendChild(loadLocationPage());

})