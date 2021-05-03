console.log("This worked");
import { createNavbar, createSlogan, createTitle } from './modules/homepage.js'

function initialize(){
    const content = document.getElementById('content');
    content.appendChild(createNavbar());
    content.appendChild(createTitle());
    content.appendChild(createSlogan());
}

initialize();
