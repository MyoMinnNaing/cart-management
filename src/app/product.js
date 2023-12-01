import { productGroup, productTemplate } from "../core/selectors";

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
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-title").innerText = title;
  product.querySelector(".product-description").innerText = description;
  product.querySelector(".product-price").innerText = price;

  return product;
};

export const productRender = (products) => {
  products.forEach((product) => productGroup.append(productUi(product)));
};
