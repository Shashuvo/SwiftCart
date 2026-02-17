const loadCategory = () =>{
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCategories(data));
}

const displayCategories = (categories)=>{
    const allCategories = document.getElementById("categories-container");
    categories.forEach(category =>{
        const categoryBtn = document.createElement("button");
        categoryBtn.innerHTML =`
        <a class="btn bg-white rounded-3xl border-2">${category}</a>
        `;
        allCategories.appendChild(categoryBtn);
    })
}

loadCategory();