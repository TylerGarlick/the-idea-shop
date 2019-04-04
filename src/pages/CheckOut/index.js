import React from 'react'

import Cart from '../../components/Cart'

const CART_KEY = `CART`

const getCartItems = () => {
  const raw = localStorage.getItem(CART_KEY)
  if (raw !== null && raw.length > 0) return JSON.parse(raw)
  return []
}

const findItem = (items = [], id) => items.find(({ id }) => id === id)

const hasItem = (items = [], id) => findItem(items, id) === null

export const updateItemInCart = (item, quantity = 1) => {

  const items = getCartItems()

  if (!hasItem(items, item.id)) {
    save([...items, { ...item, quantity: 1 }])
  } else {
    save([...items.map(value => (value.id === item.id ? { ...item, quantity: value.quantity + quantity } : value))])
  }
}

const save = items => {
  const raw = JSON.stringify(items)
  localStorage.setItem(CART_KEY, raw)
}

export default () => {
  const items = getCartItems()

  return (
    <>
      <h1>CheckOut</h1>
      <Cart items={items} />
    </>
  )
}
