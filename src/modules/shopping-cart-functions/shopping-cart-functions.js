/* eslint-disable array-callback-return */

function increaseQuantity(product)
{
  return { ...product, quantity: product.quantity + 1 };
}

function decreaseQuantity(product)
{
  return { ...product, quantity: product.quantity - 1 };
}

function calculateSum(shoppingCartItems, selectedCurrency)
{
  return (
    Math.round(
      shoppingCartItems.reduce((sum, item) =>
      {
        let selectedPrice = 0;
        item.prices.map((price) =>
        {
          if (price.currency.label === selectedCurrency.label)
          {
            selectedPrice = price.amount;
          }
        });
        return item.quantity * selectedPrice + sum;
      }, 0) * 100,
    ) / 100
  );
}

function calculateCartItemsQuantity(shoppingCartItems)
{
  return shoppingCartItems.reduce((sum, item) => sum + item.quantity, 0);
}

// Tax value can be stored in a variable and then passed here but for this assignment, I decided to hardcode it
function calculateTax(sum, items, currency)
{
  return Math.round(sum(items, currency) * 0.21 * 100) / 100;
}
export {
  increaseQuantity,
  decreaseQuantity,
  calculateSum,
  calculateCartItemsQuantity,
  calculateTax,
};
