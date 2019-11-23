import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

function AddProductToCart() {
  const [ quantity, setQuantity ] = useState(1)

  return <Input
    type="number"
    min="1"
    placeholder="Quantity"
    value={quantity}
    onChange={event => setQuantity(Number(event.target.value))}
    action={{
      color: "orange",
      content: "Add to Cart",
      icon: "plus cart"
    }}
  />
}

export default AddProductToCart;
