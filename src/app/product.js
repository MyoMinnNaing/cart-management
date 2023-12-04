import { products } from "../core/data";
import {
  outlineStarTemplate,
  productCartItemGroup,
  productGroup,
  productTemplate,
  solidStarTemplate,
  totalCost,
} from "../core/selectors";
import { productCartItemUi } from "./cart";

export const ratingStar = (rate) => {
  const starsFragment = document.createDocumentFragment();

  for (let i = 1; i <= 5; i++) {
    const solidStar = solidStarTemplate.content.cloneNode(true);
    const outlineStar = outlineStarTemplate.content.cloneNode(true);

    if (rate.toFixed(0) >= i) {
      starsFragment.append(solidStar);
    } else {
      starsFragment.append(outlineStar);
    }
  }

  return starsFragment;
};

const productUi = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating: { rate, count },
}) => {
  const product = productTemplate.content.cloneNode(true);
  product.querySelector(".product-card").setAttribute("product-card-id", id);
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-title").innerText = title;
  product.querySelector(".product-description").innerText = description;
  product.querySelector(".product-price").innerText = price;
  product.querySelector(".product-rating").innerText = rate;
  product.querySelector(".product-count").innerText = count;

  product.querySelector(".product-stars").append(ratingStar(rate));

  // if the product is already exists in cart , add to cart button => must be disabled
  if (productCartItemGroup.querySelector(`[product-cart-item-id = '${id}']`)) {
    product.querySelector(".add-to-cart-btn").toggleAttribute("disabled");
  }
  return product;
};

export const productRender = (products) => {
  productGroup.innerHTML = "";
  products.forEach((product) => productGroup.append(productUi(product)));
};

export const productGroupHandler = (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    event.target.toggleAttribute("disabled");
    const currentProductCard = event.target.closest(".product-card");
    const currentProductCardId =
      currentProductCard.getAttribute("product-card-id");

    const currentProduct = products.find(
      (product) => product.id == currentProductCardId
    );

    productCartItemGroup.append(productCartItemUi(currentProduct));
  }

  // count product item in cart
  //  count with cartObserver in cart.js
};
