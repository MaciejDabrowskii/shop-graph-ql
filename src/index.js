import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// import { Query } from "@apollo/client/react/components";
import App from "./App";

// client.query({
//   query: X,
// })
//   .then((res) => console.log(res));

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
      {/* <Query query={X}>
        {({ data, loading }) =>
        {
          if (!loading)
          {
            const { currencies } = data;
            return currencies.map((currency) => <p>{currency.label}</p>);
          }
        }}
      </Query> */}
    </React.StrictMode>
  </ApolloProvider>,
);
