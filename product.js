import { getProductById } from "./utils.js";

let params = new URL(document.location).searchParams;
let productId = params.get("productId");

getProductById(productId);
