const createOrder = (customerNumber, products) => {
  const taxRate = .0825;
  const totalProductPrice = products
    .map(x => x.unitPrice * x.quantity)
    .reduce((x, y) => x + y);
  return {
    customerNumber: customerNumber,
    products: products,
    totalPrice: totalProductPrice * (1 + taxRate)
  };
};

module.exports = createOrder;
