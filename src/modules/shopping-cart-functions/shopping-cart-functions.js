function increaseQuantity(product)
{
  return { ...product, quantity: product.quantity + 1 };
}

function decreaseQuantity(product)
{
  return { ...product, quantity: product.quantity - 1 };
}

export { increaseQuantity, decreaseQuantity };
