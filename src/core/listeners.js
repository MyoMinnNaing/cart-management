import { categoryGroupHandler } from "../app/category";
import { productGroupHandler } from "../app/product";
import {
  closeInputBtnHandler,
  searchBtnHandler,
  searchInputHandler,
} from "./handler";
import {
  categoryGroup,
  closeInputBtn,
  productGroup,
  searchBtn,
  searchInput,
} from "./selectors";

const listener = () => {
  categoryGroup.addEventListener("click", categoryGroupHandler);
  searchBtn.addEventListener("click", searchBtnHandler);
  searchInput.addEventListener("keyup", searchInputHandler);
  closeInputBtn.addEventListener("click", closeInputBtnHandler);
  productGroup.addEventListener("click", productGroupHandler);
};

export default listener;
