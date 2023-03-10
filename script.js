const products = document.querySelector('.content');
const carts = document.querySelector('.section_cart');
const datajson = JSON.parse(data)
datajson.forEach(element => {
    const product = document.createElement('div');
    const img = document.createElement('img');
    const content = document.createElement('div');
    const name = document.createElement('h1');
    const price = document.createElement('h1');
    const description = document.createElement('h1');
    const button = document.createElement('button');
    const cart = document.createElement('h1');
    const color = document.createElement('h1');
    const size = document.createElement('h1');
    const quantity = document.createElement('h1');
    const deletebutton = document.createElement('button');
    img.src = element.img;
    name.textContent = element.name;
    price.textContent = element.price;
    description.textContent = element.description;
    button.textContent = 'Add to Cart';
    cart.textContent = 'Cart Items';
    color.textContent = element.color;
    size.textContent = element.size;
    quantity.textContent = element.quantity;
    deletebutton.textContent = 'DELETE';
    product.classList.add('product');
    img.classList.add('image');
    name.classList.add('heading');
    price.classList.add('price');
    description.classList.add('description');
    cart.classList.add('cart_item');
    color.classList.add('color');
    size.classList.add('size');
    quantity.classList.add('quantity');
    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(price);
    content.appendChild(button);
    product.appendChild(img);
    product.appendChild(content);
    products.appendChild(product);
    button.addEventListener("click", function (e) {
        console.log(element);
        const deletebutton = document.createElement('button');
        const img = document.createElement('img');
        const name = document.createElement('h1');
        const price = document.createElement('h1'); 
        const color = document.createElement('h1');
        const size = document.createElement('h1');
        const quantity = document.createElement('h1');
        deletebutton.textContent = 'DELETE';
        img.src = element.img;
        name.textContent = element.name;
        price.textContent = element.price;
        color.textContent = element.color;
        size.textContent = element.size;
        quantity.textContent = element.quantity;
        carts.appendChild(deletebutton);
        carts.appendChild(name);
        carts.appendChild(img);
        carts.appendChild(price);
        carts.appendChild(color);
        carts.appendChild(size);
        carts.appendChild(quantity);
        deletebutton.addEventListener("click", function(e) {
            e.currentTarget.parentNode.remove();
        });
    });
});