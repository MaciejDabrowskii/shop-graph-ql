/* eslint-disable consistent-return */
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

export { increaseQuantity, decreaseQuantity, calculateSum };
