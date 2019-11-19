import React from 'react'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

import ProductList from '../components/Index/ProductList'

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // fetch data on a server
  const url = `${baseUrl}/api/products`
  const response = await axios.get(url)
  return { products: response.data }
  // return response data as a object
  // this object will be merge with existing props
}

export default Home;
