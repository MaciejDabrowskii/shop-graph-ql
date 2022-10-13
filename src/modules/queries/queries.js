import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const GET_CURRENCY = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_CATEGORY_PRODUCTS = gql`
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

export const GET_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
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
`;
