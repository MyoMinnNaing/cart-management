import { products } from "../core/data";
import { categoryGroup, productGroup } from "../core/selectors";
import { productRender } from "./product";

const categoryUi = (text) => {
  const category = categoryTemplate.content.cloneNode(true);
  category.querySelector(".category-name").innerText = text;

  return category;
};

export const categoryRender = (categories) => {
  categories.forEach((category) => categoryGroup.append(categoryUi(category)));
};

export const categoryGroupHandler = (event) => {
  //   console.dir(event.target);
  if (event.target.classList.contains("categoryBtn")) {
    const filterCategory = event.target.innerText;

    // remove active class of old categoryBtn
    categoryGroup.querySelector("button.active")?.classList?.remove("active");

    // add active class to the current categoryBtn
    event.target.classList.add("active");
    productRender(
      products.filter(
        (product) =>
          filterCategory == "All" || product.category == filterCategory
      )
    );
  }
};
