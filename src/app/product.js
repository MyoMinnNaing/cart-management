import { loadConfigFromFile } from "vite";
import {
  outlineStarTemplate,
  productGroup,
  productTemplate,
  solidStarTemplate,
} from "../core/selectors";

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
  return product;
};

export const productRender = (products) => {
  productGroup.innerHTML = "";
  products.forEach((product) => productGroup.append(productUi(product)));
};

export const productGroupHandler = (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const currentProduct = event.target.closet(".product-card");
    // const currentProductId = currentProduct.getAttribute("product-card-id");
    // console.log(currentProductId);
  }
};
