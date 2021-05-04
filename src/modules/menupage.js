function loadMenuPage() {
    let menuPage = document.createElement('div');
    menuPage.setAttribute("id", 'menuPage');
    menuPage.classList.add('menuPage');

    let itemOne = document.createElement('div');
    itemOne.setAttribute('id', 'itemOne');
    itemOne.classList.add('menuItems');
    itemOne.textContent = "itemOne";
    menuPage.appendChild(itemOne);

    let itemTwo = document.createElement('div');
    itemTwo.setAttribute('id', 'itemTwo');
    itemTwo.classList.add('menuItems');
    itemTwo.textContent = "itemTwo";
    menuPage.appendChild(itemTwo);


    let itemThree = document.createElement('div');
    itemThree.setAttribute('id', 'itemThree');
    itemThree.classList.add('menuItems');
    itemThree.textContent = "itemThree";
    menuPage.appendChild(itemThree);


    let itemFour = document.createElement('div');
    itemFour.setAttribute('id', 'itemFour');
    itemFour.classList.add('menuItems');
    itemFour.textContent = "itemFour";
    menuPage.appendChild(itemFour);

    return menuPage;
}

export { loadMenuPage };