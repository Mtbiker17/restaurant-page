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
    createTitle,
    createSlogan
};











