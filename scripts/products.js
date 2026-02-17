let currentActiveBtn = null;
const loadCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCategories(data));
}

const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayProducts(data));
}

const loadProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => displayProducts(data));
}

const displayCategories = (categories) => {
    const allCategories = document.getElementById("categories-container");
    allCategories.innerHTML = "";
    // all
    const allBtn = document.createElement("button");
    allBtn.textContent = "All";
    allBtn.className = "btn rounded-3xl border-2 w-10/12 mx-auto md:mx-0 md:w-auto bg-white text-black";
    allBtn.addEventListener("click", () => {
        loadProducts();
        setActiveButton(allBtn);
    });
    allCategories.appendChild(allBtn);
    setActiveButton(allBtn);
    // Other categories
    categories.forEach(category => {
        const categoryBtn = document.createElement("button");
        categoryBtn.textContent = category;
        categoryBtn.className = "btn rounded-3xl border-2 w-10/12 mx-auto md:mx-0 md:w-auto md:mx-0 bg-white text-black";
        categoryBtn.addEventListener("click", () => {
            loadProductsByCategory(category);
            setActiveButton(categoryBtn);
        });
        allCategories.appendChild(categoryBtn);
    });
};

const setActiveButton = (btn) => {
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove("bg-indigo-600", "text-white");
        currentActiveBtn.classList.add("bg-white", "text-black");
    }
    btn.classList.add("bg-indigo-600", "text-white");
    btn.classList.remove("bg-white", "text-black");
    currentActiveBtn = btn;
};

const displayProducts = (products) => {
    const productsCard = document.getElementById("productCard-container");
    productsCard.innerHTML = " ";
    products.forEach(product => {
        const productCard = document.createElement("div")
        productCard.innerHTML = `
        <div class="card bg-base-100 w-72 mx-auto h-full flex flex-col shadow-sm rounded-xl">
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
            <h2 class="mt-2 font-semibold text-xl min-h-[56px] line-clamp-1">${product.title}</h2>
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
loadCategory();
loadProducts();