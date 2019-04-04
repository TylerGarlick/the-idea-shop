import React, { useState } from 'react'

export default ({ items = [] }) => {
  const itemsTotal = items.map(({ quantity, price }) => quantity * price).reduce((prev, current) => prev + current, 0)
  const tax = itemsTotal * 0.065
  const shipping = itemsTotal * 0.065
  const total = itemsTotal + tax + shipping

  return (
    <>
      {items.map((item, i) => {
        const [cartItem, setCartItem] = useState()

        return (
          <div key={i}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
          </div>
        )
      })}

      <div>Sub Total: {itemsTotal}</div>
      <div>Tax: {tax}</div>
      <div>Shipping: {shipping}</div>
      <div>Total: {total}</div>
    </>
  )
}
