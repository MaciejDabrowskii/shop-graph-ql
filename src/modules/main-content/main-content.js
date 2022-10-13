import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import RenderProducts from "./render-products/render-products";
import ProductDetails from "./product-details/product-details";
import ShoppingCartDetails from "./shopping-cart-details/shopping-cart-details";
import Loading from "./loading-component/loading-component";
import { GET_CATEGORY_PRODUCTS } from "../queries/queries";
import { GlobalStatesMethods }
  from "../global-state-context/global-state-context";

function MainContent()
{
  const { selectedCategory, overlayVisible } = GlobalStatesMethods();

  const [products, setProducts] = useState([]);

  const [getProducts, { loading, error, data }] = useLazyQuery(
    GET_CATEGORY_PRODUCTS,
  );

  useEffect(() =>
  {
    getProducts({
      variables: {
        name: selectedCategory,
      },
    });
  }, [selectedCategory]);

  useEffect(() =>
  {
    if (data)
    {
      setProducts(data.category.products);
    }
  }, [data]);

  if (loading) return <Loading height="600px" />;

  if (error)
  {
    console.log(error);
    return <p>Error, check out the console</p>;
  }

  return (
    <div className="main-content-container">
      <Routes>
        <Route path="/" element={<RenderProducts products={products} />} />
        {products.map((product) => (
          <Route
            path={`/${product.id}`}
            key={product.id}
            element={<ProductDetails productId={product.id} />}
          />
        ))}
        <Route
          path="/your-bag"
          element={<ShoppingCartDetails providedClass="shoppingCartDetails" />}
        />
      </Routes>
      {overlayVisible && <div className="category-overlay" />}
    </div>
  );
}

export default MainContent;
