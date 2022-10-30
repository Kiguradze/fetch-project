import { renderProducts } from "./utils.js";

const btn = document.getElementById("btn");
let input = document.getElementById("input");

btn.addEventListener("click", () => {
  renderProducts(input.value);
  input.value = "";
});

renderProducts(input.value);
