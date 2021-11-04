const template = (name, id, price, inStock) => {
    const details = document.getElementById("selection-details");
    details.innerHTML = `
            <h5 class="selected-product-name">${name}</h5>
            <h6 class="selected-product-id">${id}</h6>
            <span class="price">${price} EUR</span>
            <span class="in-stock">${inStock}</span>
            `
};

const colorSelect = color => {
    template(productsInventory[color].name, productsInventory[color].id, productsInventory[color].price, productsInventory[color]["in-stock"]);
    imgsTemplate(productsInventory[color].images);
}

(function() {
    colorSelect("red");
})();

