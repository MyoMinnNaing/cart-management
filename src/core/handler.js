import { productRender } from "../app/product";
import { products } from "./data";
import { confirmBox, toast } from "./funcitions";
import {
  productCartItemGroup,
  productGroup,
  searchBtn,
  searchINputContainer,
  searchInput,
  totalCost,
} from "./selectors";

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

  searchInput.value = null;
  productRender(products);
};

// order handler
export const orderBtnHandler = (event) => {
  confirmBox(() => {
    const order = {};
    order.id = Date.now();
    order.customerName = "Myo Min Naing";
    order.product = [
      ...productCartItemGroup.querySelectorAll(".product-cart-item"),
    ].map((el) => {
      const data = {
        id: el.getAttribute("product-cart-item-id"),
        quantity: el.querySelector(".product-cart-quantity").innerText,
      };

      // remove cart item form productCartItemGroup
      productCartItemGroup
        .querySelector(`[product-cart-item-id= '${data.id}']`)
        .remove();

      //  remove disable of Add to cart button

      productGroup
        .querySelector(`[product-card-id= '${data.id}']`)
        .querySelector(".add-to-cart-btn")
        .toggleAttribute("disabled");

      return data;
    });

    order.total = totalCost.innerText;
    console.log(order);
    toast("your order sent successfully..");
  }, "Are you sure to order");
};
