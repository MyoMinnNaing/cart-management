import { productCartItemGroupHandler } from "../app/cart";
import { categoryGroupHandler } from "../app/category";
import { productGroupHandler } from "../app/product";
import {
  closeInputBtnHandler,
  orderBtnHandler,
  searchBtnHandler,
  searchInputHandler,
} from "./handler";
import {
  categoryGroup,
  closeInputBtn,
  orderBtn,
  productCartItemGroup,
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
  productCartItemGroup.addEventListener("click", productCartItemGroupHandler);
  orderBtn.addEventListener("click", orderBtnHandler);
};

export default listener;
