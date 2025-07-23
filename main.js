
const productsDiv = document.getElementsByClassName('products')[0];

let products = [
    {
        name: "Apple",
        price: 25,
        image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=6.0.84"
    },
    {
        name: "Milk",
        price: 40,
        image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1536x1024.jpeg"
    },
    {
        name: "Bread",
        price: 30,
        image: "https://www.bhg.com/thmb/ix1jf9aUXcxyFtekIBlVCAIBW4w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BHG-milk-bread-4CdeIL1uKGyB5ryU8J_EED-aaa76729c86a413ca7500029edba79f0.jpg"
    },
    {
        name: "Eggs",
        price: 60,
        image: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
    },
    {
        name: "Tomato",
        price: 20,
        image: "https://www.alimentarium.org/sites/default/files/media/image/2016-10/AL001-02%20tomate_0.jpg"
    }
];

for (const product of products) {
    const productBlock = document.createElement('div');//h2 + img

    const h2 = document.createElement('h2');
    h2.innerText = `${product.name} ${product.price} UAH`;

    const img = document.createElement('img');
    img.src = product.image;

    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Add to shopping cart';

    buttonElement.onclick = function(){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    productBlock.append(h2, img, buttonElement);

    productsDiv.appendChild(productBlock);

}