const productsInventory = {
    "red": {
        "name": "Red Roses",
        "id": "5679rr",
        "price": 8.99,
        "in-stock": "available",
        "images": ["/images/redRoses/1.jerry-klein-nAU7f7sR9eY-unsplash.jpg", "/images/redRoses/2.biel-morro-kcKiBcDTJt4-unsplash.jpg"]
    },
    "pink": {
        "name": "Pink Roses",
        "id": "5679pr",
        "price": 9.99,
        "in-stock": "low stock",
        "images": ["/images/pinkRoses/1.thais-do-rio-ABTgnOFNVYc-unsplash.jpg", "/images/pinkRoses/2.adriana-leon-3ci8WBZwH3w-unsplash.jpg"]
    },
    "yellow": {
        "name": "Yellow Roses",
        "id": "5679yr",
        "price": 6.99,
        "in-stock": "available",
        "images": ["/images/yellowRoses/1.kamala-bright-G_sv4-uQEbE-unsplash.jpg", "/images/yellowRoses/2.felipe-salgado-67duUrW5VaM-unsplash.jpg"]
    },
    "blue": {
        "name": "Blue Roses",
        "id": "5679br",
        "price": 15.99,
        "in-stock": "not available",
        "images": ["/images/blueRoses/1.abhijeet-6Bjea0_-37s-unsplash.jpg", "/images/blueRoses/2.insung-yoon-iNeb6Y4KpK4-unsplash.jpg"]
    }
}

const template = (name, id, price, inStock) => {
    const details = document.getElementById("selection-details");
    details.innerHTML = `
            <h5 class="selected-product-name">${name}</h5>
            <h6 class="selected-product-id">${id}</h6>
            <span class="price">${price} EUR</span>
            <span class="in-stock">${inStock}</span>
            `
};

const imgsTemplate = pics => {
    //TO DO: implement a counter and a loop to go over all images in the array
    //and move 1 to the left or 1 to the right
    const images = document.getElementById("carousel");
    images.innerHTML = `
    <img class="rose" src=${pics[0]} alt="a rose"/>
    <img class="roses" src=${pics[1]} alt="roses"/>
    <button class="backward" onclick="onClickBW()">&lt;</button>
    <button class="foreward" onclick="onClickFW()">&gt;</button>
    <span class="indicator1"></span>
    <span class="indicator2"></span>
    `   
}

const onClickFW = img => {
    const images = document.getElementById("carousel");
    images.children[0].setAttribute("style", "display: none");
    images.children[1].setAttribute("style", "display: initial");
    images.children[2].setAttribute("style", "display: initial");
    images.children[3].setAttribute("style", "display: none");
    images.children[4].setAttribute("style", "background-color: white");
    images.children[5].setAttribute("style", "background-color: rgb(48, 47, 47)");
}

const onClickBW = img => {
    const images = document.getElementById("carousel");
    images.children[1].setAttribute("style", "display: none");
    images.children[0].setAttribute("style", "display: initial");
    images.children[2].setAttribute("style", "display: none");
    images.children[3].setAttribute("style", "display: initial");
    images.children[4].setAttribute("style", "background-color: rgb(48, 47, 47)");
    images.children[5].setAttribute("style", "background-color: white)");
}

const colorSelect = color => {
    template(productsInventory[color].name, productsInventory[color].id, productsInventory[color].price, productsInventory[color]["in-stock"]);
    imgsTemplate(productsInventory[color].images);
}

(function() {
    colorSelect("red");
})();

