import React, { useState } from 'react'
import FormatToMoney from 'format-money'

const TAX = 0.065
const SHIPPING = 20

const usd = value => FormatToMoney(value)

export default ({ items = [] }) => {
  const itemsTotal = items.map(({ quantity, price }) => quantity * price).reduce((prev, current) => prev + current, 0)
  const tax = itemsTotal * TAX
  const shipping = SHIPPING
  const total = itemsTotal + tax + SHIPPING

  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{usd(item.price)}</span>
          </div>
        )
      })}

      <div>Sub Total: {usd(itemsTotal)}</div>
      <div>Tax: {usd(tax)}</div>
      <div>Shipping: {usd(shipping)}</div>
      <div>Total: {usd(total)}</div>
    </>
  )
}
