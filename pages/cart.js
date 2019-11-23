import { Segment } from 'semantic-ui-react'
import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { parseCoockies } from 'nookies'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

function Cart() {
  return (
    <Segment>
      <CartItemList />
      <CartSummary />
    </Segment>
  )
}

Cart.getInitialProps = async ctx => {
  const { token } = parseCoockies(ctx)
  if (!token) {
    return { products: [] }
  }
  const url = `${baseUrl}/api/cart`
  const payload = { headers: { Authorization: token }}
  await axios.get(url, payload)
}

export default Cart;
