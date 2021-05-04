function loadAboutPage() {
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');

    let aboutText = document.createElement('div');
    let description = document.createElement('div');
    aboutText.classList.add('aboutText')
    description.classList.add('aboutText')
    aboutText.setAttribute('id', 'aboutText');
    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(description);
    aboutText.textContent = "|| denizen (noun). a person who inhabits a particular place. ||";
    description.textContent = `The name Denizen pays homage to those who claim a local spot as their own.
                                Located in the city of Portland, Maine and it's compelling food scene,
                                we offer the environment of everyone's favorite 
                                local joint along with locally - sourced ingredients from surrounding farms.
                                Since our modest beginnings in 2008, Denizen has served as a spot for
                                locals and travelers alike.`;
    return aboutContainer; 
}

export { loadAboutPage };