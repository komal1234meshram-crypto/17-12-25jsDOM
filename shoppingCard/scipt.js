window.addEventListener("load", () => {
    fetchData();
});

const fetchData = () => {
    fetch("https://dummyjson.com/products")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        data.products.forEach((product) => {
            createCard(product);
        });
    })
    .catch((error) => {
        console.log(error);
    });
};

const createCard = (product) => {
    let card = document.createElement("div");
    let product_title = document.createElement("h3");
    let btn = document.createElement("button");

    //add css 
    card.classList.add("card");
    product_title.classList.add("product-name");
    btn.classList.add("btn");

    //add content
    product_title.innerText = "Name of Product: " + product.title + " | Price:" + product.price;
    btn.innerText="add to cart"

    //add child -> parent
    card.appendChild(product_title);
    card.appendChild(btn);

    //card -> container
    document.getElementById("main").appendChild(card);
}