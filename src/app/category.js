import { categoryGroup } from "../core/selectors";

const categoryUi = (text) => {
  const category = categoryTemplate.content.cloneNode(true);
  category.querySelector(".category-name").innerText = text;

  return category;
};

export const categoryRender = (categories) => {
  categories.forEach((category) => categoryGroup.append(categoryUi(category)));
};
