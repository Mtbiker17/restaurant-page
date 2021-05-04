function loadAboutPage() {
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');
    let aboutText = document.createElement('div');
    aboutText.classList.add('aboutText')
    aboutText.setAttribute('id', 'aboutText');
    aboutContainer.appendChild(aboutText);
    aboutText.textContent = "We Are Good, I Promise!";
    return aboutContainer;
}

export { loadAboutPage };