const createOrder = require("./order");

const addedProduct = {
  sku: "A7093",
  unitPrice: 10,
  quantity: 1
};
const addedProducts = [addedProduct];
const createdOrder = createOrder("133", addedProducts);
