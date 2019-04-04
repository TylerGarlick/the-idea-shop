import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { updateItemInCart as addItemToCart } from '../../pages/CheckOut'

const Products = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const Product = styled.section`
  display: flex;
  flex-direction: column;

  border: 1px solid grey;
  margin: 15px;

  width: 200px;

  h4 {
    display: block;
    flex: 1;
    margin: 0;
    padding: 15px;
  }

  img {
    display: block;
    flex: 1;
    width: 100%;
    height: 100%;
    max-width: 200px;
  }
`

const ActionMenu = styled.div`
  display: flex;
  flex: 1;

  strong {
    display: flex;
    flex: 2;
    padding: 15px;
  }

  button {
    display: flex;
  }
`

const PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      description
      photoUrl
      price
    }
  }
`

export default () => (
  <Products>
    <Query query={PRODUCTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>{error}</div>

        return data.products.map(product => (
          <Product key={product.id}>
            <h4>
              <a href={`/products/${product.id}`}>{product.name}</a>
            </h4>
            <img src={product.photoUrl} alt={product.description} />

            <ActionMenu>
              <strong>{product.price}</strong>
              <button type="button" onClick={e => addItemToCart(product, 1)}>
                Add
              </button>
            </ActionMenu>
          </Product>
        ))
      }}
    </Query>
  </Products>
)
