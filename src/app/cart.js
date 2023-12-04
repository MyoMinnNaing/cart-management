import { confirmBox, toast } from "../core/funcitions";
import {
  productCartItemGroup,
  productCartItemTemplate,
  productGroup,
} from "../core/selectors";

export const productCartItemUi = ({ id, image, title, price }) => {
  const productCartItem = productCartItemTemplate.content.cloneNode(true);

  productCartItem
    .querySelector(".product-cart-item")
    .setAttribute("product-cart-item-id", id);
  productCartItem.querySelector(".product-cart-img").src = image;
  productCartItem.querySelector(".product-cart-title").innerText = title;
  productCartItem.querySelector(".product-cart-cost").innerText = price;
  productCartItem.querySelector(".product-cart-price").innerText = price;
  productCartItem.querySelector(".product-cart-quantity").innerText = 1;

  return productCartItem;
};

const cartItemRemove = (id) => {
  const currentCartItem = productCartItemGroup.querySelector(
    `[product-cart-item-id= '${id}']`
  );
  const currentProductCard = productGroup.querySelector(
    `[product-card-id='${id}'`
  );

  confirmBox(() => {
    currentCartItem.remove();
    currentProductCard
      .querySelector(".add-to-cart-btn")
      .toggleAttribute("disabled");
    toast("item has been deleted....");
  });
};

const cartItemUpdate = (cartItemId, quantity) => {
  const currentCartItem = productCartItemGroup.querySelector(
    `[product-cart-item-id= '${cartItemId}' `
  );

  const currentCartItemPrice = currentCartItem.querySelector(
    ".product-cart-price"
  );
  const currentCartItemCost =
    currentCartItem.querySelector(".product-cart-cost");
  const currentCartItemQuantity = currentCartItem.querySelector(
    ".product-cart-quantity"
  );

  if (quantity > 0 || currentCartItemQuantity.innerText > 1) {
    currentCartItemQuantity.innerText =
      parseInt(currentCartItemQuantity.innerText) + quantity;
    currentCartItemCost.innerText =
      currentCartItemQuantity.innerText * currentCartItemPrice.innerText;
  }
};

export const productCartItemGroupHandler = (event) => {
  if (event.target.classList.contains("cart-del-btn")) {
    cartItemRemove(
      event.target
        .closest(".product-cart-item")
        .getAttribute("product-cart-item-id")
    );
  } else if (event.target.classList.contains("sub-quantity-btn")) {
    cartItemUpdate(
      event.target
        .closest(".product-cart-item")
        .getAttribute("product-cart-item-id"),
      -1
    );
  } else if (event.target.classList.contains("add-quantity-btn")) {
    cartItemUpdate(
      event.target
        .closest(".product-cart-item")
        .getAttribute("product-cart-item-id"),
      1
    );
  }
};

export const cartObserver = () => {
  const process = () => {
    const itemCount =
      productCartItemGroup.querySelectorAll(".product-cart-item").length;
    app
      .querySelectorAll(".cart-item-count")
      .forEach((el) => (el.innerText = itemCount));

    const total = [
      ...productCartItemGroup.querySelectorAll(".product-cart-cost"),
    ].reduce((pv, cv) => pv + parseFloat(cv.innerHTML), 0);

    totalCost.innerText = total.toFixed(2);
  };

  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(process);
  observer.observe(productCartItemGroup, observerOptions);
};
