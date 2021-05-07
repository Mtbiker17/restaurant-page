function loadMenuPage() {
    let menuPage = document.createElement('div');
    menuPage.setAttribute("id", 'menuPage');
    menuPage.classList.add('menuPage');

    function addMenuItem(itemName, itemDescription) {
        let item = document.createElement('div');
        item.classList.add('menuItems')
        item.textContent = itemName;
        let description = document.createElement('div');
        description.classList.add('menuDescription');
        item.appendChild(description);
        description.textContent = itemDescription;
        menuPage.appendChild(item);

        return item;
    }
    
    menuPage.appendChild(addMenuItem(
        "Tropical Lobster Rolls",
        "Maine lobster from South Bristol Co-op served on buttered dinner roll w/ lemon and orange zest aioli"
    ));

    menuPage.appendChild(addMenuItem(
        "Venison Tenderloin w/ Spiced Cranberry Relish",
        "Venison tenderloin sauteed in olive oil, thyme, salt and pepper topped with cranberry relish spiced with ginger, cloves, cinnamon and currants"
    ));

    menuPage.appendChild(addMenuItem(
        "Corn-Fried Oysters",
        "Damariscotta Oysters fried in coarse-ground cornmeal with cayenne pepper"
    ));
    
    menuPage.appendChild(addMenuItem(
        "Dev's Fish n' Chips",
        "Haddock from Pepper's Landing, Brunswick, ME. Fried in house-made batter w/ dijon mustard, beer and pepper served with hand-cut Buck Farms russet potato fries"
    ));
    
    menuPage.appendChild(addMenuItem(
        "Grilled Chicken n' Cheddar Salad",
        "Bisson Farms chicken grilled on a romaine and arugula salad. Tossed with shaved cheddar, thinly sliced apple, and roasted red peppers"
    ));

    menuPage.appendChild(addMenuItem(
        "Chili w/ Blue Cheese Gougeres",
        "Hearty chili w/ Bisson Farms ground beef with browned gougeres garnished with crumbled blue cheese and fresh cilantro"
    ));

    menuPage.appendChild(addMenuItem(
        "Double Cheddar Grilled Cheese Sandwich",
        "Cheddar bread from Standard Baking Co., grilled with excellent cheddar seasoned with baby arugula"
    ));

    menuPage.appendChild(addMenuItem(
        "Chipotle Bacon Burger",
        "A local favorite. Locally-sourced ground beef mixed with adobo sauce, garlic, salt and pepper, served on a brioche bun with chipotle sauce"
    ));

    return menuPage;
}

export { loadMenuPage };