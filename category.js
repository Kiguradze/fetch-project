import { getAllCategory, getProductsByCategory } from "./utils.js";

document.addEventListener("click", function (e) {
  if (e.target && e.target.getAttribute("class") == "product-category") {
    console.log(e.target.value);
    getProductsByCategory(e.target.value);
  }
});

getAllCategory();
