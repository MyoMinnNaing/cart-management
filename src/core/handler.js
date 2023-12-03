import { productRender } from "../app/product";
import { products } from "./data";
import { searchBtn, searchINputContainer, searchInput } from "./selectors";

export const searchBtnHandler = () => {
  searchBtn.classList.toggle("opacity-0");
  searchBtn.classList.add("pointer-events-none");

  searchINputContainer.classList.toggle("pointer-events-none");
  searchINputContainer.classList.toggle("-translate-y-11");
  searchINputContainer.classList.toggle("opacity-0");

  searchInput.focus();
};

export const searchInputHandler = (event) => {
  productRender(
    products.filter(
      (product) => product.title.toLowerCase().search(event.target.value) != -1
    )
  );
};

export const closeInputBtnHandler = (event) => {
  searchBtn.classList.toggle("opacity-0");
  searchBtn.classList.remove("pointer-events-none");
  searchINputContainer.classList.toggle("pointer-events-none");
  searchINputContainer.classList.toggle("-translate-y-11");
  searchINputContainer.classList.toggle("opacity-0");
};
