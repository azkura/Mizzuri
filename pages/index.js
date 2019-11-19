import React from 'react'
import axios from 'axios'

function Home({ products }) {
  console.log(products)
  // React.useEffect(() => {
  //   getProducts()
  // }, [])

  // const getProducts = async () => {
  //   const url = "http://localhost:3000/api/products"
  //   const response = await axios.get(url)
  //   console.log (response.data)
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on a server
  const url = "http://localhost:3000/api/products"
  const response = await axios.get(url)
  return { products: response.data }
  // return response data as a object
  // this object will be merge with existing props
}

export default Home;
