import { categoryRender } from "../app/category";
import { productRender } from "../app/product";
import { categories, products } from "./data";
import observers from "./observer";

const initialRender = () => {
  observers();
  categoryRender(categories);
  productRender(products);
};

export default initialRender;
