const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const sortedProducts = data.sort((a, b) => b.rating.rate - a.rating.rate);
            const top3Products = sortedProducts.slice(0, 3);
            displayProducts(top3Products)
        });
}

const displayProducts = (products) => {
    const productsCard = document.getElementById("trending-card-container");
    productsCard.innerHTML = " ";
    products.forEach(product => {
        const productCard = document.createElement("div")
        productCard.innerHTML = `
        <div class="card bg-base-100 w-80 mx-auto md:w-96 h-full flex flex-col shadow-sm relative rounded-xl overflow-hidden">
        <div class="absolute top-3 left-3">
                <span class="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Trending
                </span>
        </div>
        <figure class="h-48 flex items-center justify-center p-4 bg-gray-300">
            <img src=${product.image} alt="Product Image" class="max-h-full object-contain" />
        </figure>
        <div class="card-body flex flex-col flex-grow">
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="text-indigo-600 bg-indigo-100 px-3 font-medium rounded-2xl">${product.category}</h1>
                </div>
                <div>
                    <h1 class="opacity-80"><i class="fa-solid fa-star text-yellow-400 mr-1"></i>${product.rating.rate} (${product.rating.count})</h1>
                </div>
            </div>
            <h2 class="mt-2 font-semibold text-xl min-h-[56px] line-clamp-2">${product.title}</h2>
            <p class="font-bold text-xl">Price: $${product.price}</p>
            <div class="card-actions mt-4 flex w-full space-x-1">
                <div class="flex-1">
                    <button
                        class="btn w-full bg-white rounded-lg hover:bg-indigo-100 hover:border-indigo-600 hover:text-indigo-600"><i
                            class="fa-regular fa-eye mr-1"></i>Details</button>
                </div>
                <div class="flex-1">
                    <button
                        class="btn w-full text-white rounded-lg hover:bg-indigo-100 bg-indigo-600 hover:border-indigo-600 hover:text-indigo-600"><i
                            class="fa-solid fa-cart-shopping mr-1"></i>Add</button>
                </div>
            </div>
        </div>
        </div>
        `;
        productsCard.appendChild(productCard);
    })
}

loadProducts();