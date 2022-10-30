export const renderProducts = (productNum) => {
  fetch(`https://fakestoreapi.com/products?limit=${productNum}`)
    .then((res) => res.json())
    .then((json) => {
      let data1 = "";
      json.map((item) => {
        data1 += `<a href="product.html?productId=${item.id}" target="_blank" class="card" ">
            <img class="img" src="${item.image}" alt="" />
            <p class="category">${item.category}</p>
            <p class="title">${item.title}</p>   
            <p class="price">${item.price} &#36</p>
            </a>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((err) => console.log(err));
};

export const getProductById = (productId) => {
  let singleCard;
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((json) => {
      singleCard = `<div class="product" >
        <img class="product-img" src="${json.image}" alt="" />
        <p class="product-category">${json.category}</p>
        <p class="product-title">${json.title}</p>
        <p class="product-desc">${json.description}</p>
        <p class="product-price">${json.price} &#36</p>
        <button class="cart-btn">Add To Cart </button>
        </div>`;
      document.querySelector("#single-product").innerHTML = singleCard;

      const img = document.querySelector(".product-img");

      img.addEventListener("click", (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(1.2)";
      });

      img.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "centre";
        img.style.transform = "scale(1)";
      });
    })
    .catch((err) => console.log(err));
};

export const getAllCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      let categories = "";
      json.map((item) => {
        categories += `<button type="button" class="product-category" value="${item}">${item}</button>`;
      });
      document.querySelector(".categories").innerHTML = categories;
    })
    .catch((err) => console.log(err));
};

export const getProductsByCategory = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((json) => {
      let productsHtml = "";
      json.map((product) => {
        productsHtml += `<a href="product.html?productId=${product.id}" target="_blank" class="card" ">
            <img class="img" src="${product.image}" alt="" />
            <p class="category">${product.category}</p>
            <p class="title">${product.title}</p>   
            <p class="price">${product.price} &#36</p>
            </a>`;
      });
      document.getElementById("cards").innerHTML = productsHtml;
    })
    .catch((error) => console.log(error));
};
