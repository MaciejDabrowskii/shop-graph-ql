/* eslint-disable array-callback-return */

function calculateSum(shoppingCartItems, selectedCurrency)
{
  return parseFloat(
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
    ) / 100,
  )
    .toFixed(2);
}

function convertToTwoDecimals(amount)
{
  return (Math.round(amount * 100) / 100).toFixed(2);
}

function calculateCartItemsQuantity(shoppingCartItems)
{
  return shoppingCartItems.reduce((sum, item) => sum + item.quantity, 0);
}

// Tax value can be stored in a variable and then passed here but for this assignment, I decided to hardcode it
function calculateTax(sum, items, currency)
{
  return (Math.round(sum(items, currency) * 0.21 * 100) / 100).toFixed(2);
}

export {
  calculateSum,
  calculateCartItemsQuantity,
  calculateTax,
  convertToTwoDecimals,
};
