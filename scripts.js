const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: '$299', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Laptop', category: 'electronics', price: '$899', image: 'path/to/image2.jpg' },
    { id: 3, name: 'T-shirt', category: 'clothing', price: '$19', image: 'path/to/image3.jpg' },
    { id: 4, name: 'Sneakers', category: 'clothing', price: '$49', image: 'path/to/image4.jpg' },
    { id: 5, name: 'Watch', category: 'accessories', price: '$99', image: 'path/to/image5.jpg' },
    { id: 6, name: 'Headphones', category: 'electronics', price: '$199', image: 'path/to/image6.jpg' }
];

function displayProducts(productList) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
        `;
        productContainer.appendChild(productItem);
    });
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});

// Initial display of all products
displayProducts(products);
