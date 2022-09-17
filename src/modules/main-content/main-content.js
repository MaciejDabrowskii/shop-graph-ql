/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import RenderProducts from "./render-products/render-products";
import ProductDetails from "./product-details/product-details";
import ShoppingCartDetails from "./shopping-cart-details/shopping-cart-details";

const GET_CATEGORY_PRODUCTS = gql`
  query category($name: String!) {
    category(input: { title: $name }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

class MainContent extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      selectedCurrency,
      selectedCategory,
      shoppingCartItems,
      overlayVisible,
      addItem,
      incrementQuantity,
      decrementQuantity,
      removeItem,
    } = this.props;
    return (
      <Query
        query={GET_CATEGORY_PRODUCTS}
        variables={{ name: selectedCategory }}
      >
        {({ data, loading }) =>
        {
          if (!loading)
          {
            const { category: { products, name } } = data;
            return (
              <div className="main-content-container">
                <Routes>
                  <Route
                    path="/"
                    element={(
                      <RenderProducts
                        products={products}
                        selectedCurrency={selectedCurrency}
                        categoryName={name}
                        shoppingCartItems={shoppingCartItems}
                      />
                    )}
                  />
                  {products.map((product) => (
                    <Route
                      path={`/${product.id}`}
                      key={product.id}
                      element={(
                        <ProductDetails
                          productId={product.id}
                          selectedCurrency={selectedCurrency}
                          shoppingCartItems={shoppingCartItems}
                          addItem={addItem}
                          incrementQuantity={incrementQuantity}

                        />
                      )}
                    />
                  ))}
                  <Route
                    path="/your-bag"
                    element={(
                      <ShoppingCartDetails
                        shoppingCartItems={shoppingCartItems}
                        selectedCurrency={selectedCurrency}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeItem={removeItem}
                        providedClass="shoppingCartDetails"

                        // setShoppingCartItems={setShoppingCartItems}
                      />
                    )}
                  />
                </Routes>
                {overlayVisible && <div className="category-overlay" />}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}
export default MainContent;

// function MainContent({
//   categoryName,
//   selectedCurrency,
//   selectedCategory,
//   shoppingCartItems,
//   setShoppingCartItems,
//   overlayVisible,
// })
// {
//   const [products, setProducts] = useState([]);
//   const [getProducts, { loading, error, data }] = useLazyQuery(
//     GET_CATEGORY_PRODUCTS,
//   );

//   useEffect(() =>
//   {
//     getProducts({
//       variables: {
//         name: categoryName,
//       },
//     });
//   }, [selectedCategory]);

//   useEffect(() =>
//   {
//     if (data)
//     {
//       setProducts(data.category.products);
//     }
//   }, [data]);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return console.log(error);

//   return (
//     <div className="main-content-container">
//       <Routes>
//         <Route
//           path="/"
//           element={(
//             <RenderProducts
//               products={products}
//               selectedCurrency={selectedCurrency}
//               categoryName={categoryName}
//               shoppingCartItems={shoppingCartItems}
//               setShoppingCartItems={setShoppingCartItems}
//             />
//           )}
//         />
//         {products.map((product) => (
//           <Route
//             path={`/${product.id}`}
//             key={product.id}
//             element={(
//               <ProductDetails
//                 productId={product.id}
//                 selectedCurrency={selectedCurrency}
//                 shoppingCartItems={shoppingCartItems}
//                 setShoppingCartItems={setShoppingCartItems}
//               />
//             )}
//           />
//         ))}
//         <Route
//           path="/your-bag"
//           element={(
//             <ShoppingCartDetails
//               shoppingCartItems={shoppingCartItems}
//               selectedCurrency={selectedCurrency}
//               setShoppingCartItems={setShoppingCartItems}
//             />
//           )}
//         />
//       </Routes>
//       {overlayVisible && <div className="category-overlay" />}
//     </div>
//   );
// }
