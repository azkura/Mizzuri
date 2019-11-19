import React from 'react'

import { Form, 
  Input, 
  TextArea, 
  Button, 
  Image, 
  Message, 
  Header,
  Icon } from 'semantic-ui-react'

const  CreateProduct = () => {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    media: "",
    description: ""
  })

  const handleChange = (event) => {
    const {name, value, files} = event.target
    if(name === 'media') {
      setProduct(prevState => ({...prevState, media: files[0] }))
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }))
      event.preventDefault()
    }
    console.log(product)
  }

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create new Product
      </Header>
      <Form >
        <Form.Group widths='equal'>
          <Form.Input 
            name="name" 
            label='Name'
            placeholder='Name'
            type="text"
            onChange={handleChange}
          />
          <Form.Input
            name="price"
            type="number"
            label='Price'
            placeholder='Price'
            min="0.00"
            step="0.01"
            onChange={handleChange}
          />
          <Form.Input
            name="media"
            type="file"
            label="Media"
            accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />       
        </Form.Group>
        <Form.TextArea
          name="description" 
          label='Description'
          placeholder='Description'
          type="text"
          onChange={handleChange}
        />
        <Form.Button type="submit" color="blue">Submit</Form.Button>
      </Form>
    </>
  )
}

export default CreateProduct;
