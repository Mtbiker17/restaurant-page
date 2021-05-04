function loadMenuPage() {
    let menuPage = document.createElement('div');
    menuPage.setAttribute("id", 'menuPage');
    menuPage.classList.add('menuPage');

    let itemOne = document.createElement('div');
    itemOne.classList.add('menuItems');
    itemOne.textContent = "Tropical Lobster Rolls";
    let itemOneDescription = document.createElement('div');
    itemOneDescription.classList.add('menuDescription')
    itemOne.appendChild(itemOneDescription);
    itemOneDescription.textContent = "Maine lobster from South Bristol Co-op served on buttered dinner roll w/ lemon and orange zest aioli"
    menuPage.appendChild(itemOne);

    let itemTwo = document.createElement('div');
    itemTwo.classList.add('menuItems');
    itemTwo.textContent = "Venison Tenderloin w/ Spiced Cranberry Relish";
    let itemTwoDescription = document.createElement('div');
    itemTwoDescription.classList.add('menuDescription')
    itemTwo.appendChild(itemTwoDescription)
    itemTwoDescription.textContent = "Venison tenderloin sauteed in olive oil, thyme, salt and pepper topped with cranberry relish spiced with ginger, cloves, cinnamon and currants"
    menuPage.appendChild(itemTwo);


    let itemThree = document.createElement('div');
    itemThree.classList.add('menuItems');
    itemThree.textContent = "Corn-Fried Oysters";
    let itemThreeDescription = document.createElement('div');
    itemThreeDescription.classList.add('menuDescription');
    itemThree.appendChild(itemThreeDescription);
    itemThreeDescription.textContent = "Damariscotta Oysters fried in coarse-ground cornmeal with cayenne pepper"
    menuPage.appendChild(itemThree);


    let itemFour = document.createElement('div');
    itemFour.classList.add('menuItems');
    itemFour.textContent = "Dev's Fish n' Chips";
    let itemFourDescription = document.createElement('div');
    itemFourDescription.classList.add('menuDescription');
    itemFour.appendChild(itemFourDescription);
    itemFourDescription.textContent = "Haddock from Pepper's Landing, Brunswick, ME. Fried in house-made batter w/ dijon mustard, beer and pepper served with hand-cut Buck Farms russet potato fries"
    menuPage.appendChild(itemFour);

    let itemFive = document.createElement('div');
    itemFive.classList.add('menuItems');
    itemFive.textContent = "Grilled Chicken n' Cheddar Salad";
    let itemFiveDescription = document.createElement('div');
    itemFiveDescription.classList.add('menuDescription');
    itemFive.appendChild(itemFiveDescription);
    itemFiveDescription.textContent = "Bisson Farms chicken grilled on a romaine and arugula salad. Tossed with shaved cheddar, thinly sliced apple, and roasted red peppers"
    menuPage.appendChild(itemFive);

    let itemSix = document.createElement('div');
    itemSix.classList.add('menuItems');
    itemSix.textContent = "Chili w/ Blue Cheese Gougeres";
    let itemSixDescription = document.createElement('div');
    itemSixDescription.classList.add('menuDescription');
    itemSix.appendChild(itemSixDescription);
    itemSixDescription.textContent = "Hearty chili w/ Bisson Farms ground beef with browned gougeres garnished with crumbled blue cheese and fresh cilantro"
    menuPage.appendChild(itemSix);

    let itemSeven = document.createElement('div');
    itemSeven.classList.add('menuItems');
    itemSeven.textContent = "Double Cheddar Grilled Cheese Sandwich";
    let itemSevenDescription = document.createElement('div');
    itemSevenDescription.classList.add('menuDescription');
    itemSeven.appendChild(itemSevenDescription);
    itemSevenDescription.textContent = "Cheddar bread from Standard Baking Co., grilled with excellent cheddar seasoned with baby arugula"
    menuPage.appendChild(itemSeven);

    let itemEight = document.createElement('div');
    itemEight.classList.add('menuItems');
    itemEight.textContent = "Chipotle Bacon Burger";
    let itemEightDescription = document.createElement('div');
    itemEightDescription.classList.add('menuDescription');
    itemEight.appendChild(itemEightDescription);
    itemEightDescription.textContent = "A local favorite. Locally-sourced ground beef mixed with adobo sauce, garlic, salt and pepper, served on a brioche bun with chipotle sauce"
    menuPage.appendChild(itemEight);

    return menuPage;
}

export { loadMenuPage };