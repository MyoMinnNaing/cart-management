import { productCartItemTemplate } from "../core/selectors";

export const productCartItemUi = ({ id, image, title, price }) => {
  const productCartItem = productCartItemTemplate.content.cloneNode(true);

  productCartItem.querySelector(".product-cart-img").src = image;
  productCartItem.querySelector(".product-cart-title").innerText = title;
  productCartItem.querySelector(".product-cart-cost").innerText = price;
  productCartItem.querySelector(".product-cart-price").innerText = price;
  productCartItem.querySelector(".product-cart-quantity").innerText = 1;

  return productCartItem;
};
