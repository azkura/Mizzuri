import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button, Segment, Divider } from 'semantic-ui-react'

import { calculateCartTotal } from '../../utils/calculateCartTotal'

function CartSummary({ products, handleCheckout, success }) {

  const [ isCartEmpty, setCartEmpty ] = useState(false)
  const [ cartAmount, setCartAmount ] = useState(0)
  const [ stripeAmount, setStripeAmount ] = useState(0)

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products)
    setCartAmount(cartTotal)
    setStripeAmount(stripeTotal)
    setCartEmpty(products.length === 0)
  }, [products])

  return <>
    <Divider />
    <Segment clearing size="large">
      <strong>Sub total:</strong> { cartAmount }€
      <StripeCheckout
        name="Mizzuri"
        amount={stripeAmount}
        image={products.length > 0 ? products[0].product.mediaUrl : ""}
        currency="eur"
        shippingAddress="true"
        billingAddress="true"
        zipCode="true"
        token={handleCheckout}
        triggerEvent="onClick"
      >
        <Button 
          icon="cart"
          color="teal"
          floated="right"
          content="checkout"
          disabled={isCartEmpty || success}
        />
      </StripeCheckout>
    </Segment>
  </>;
}

export default CartSummary;
