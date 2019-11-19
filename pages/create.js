import React from 'react'

import { Form, 
  Input, 
  TextArea, 
  Button, 
  Image, 
  Message, 
  Header,
  Icon } from 'semantic-ui-react'

function CreateProduct() {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    media: '',
    description: ""
  })

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create new Product
      </Header>
      <Form >
        <Form.Group widths='equal'>
          <Form.Input  name="name" label='Name' placeholder='Name' type="text"/>
          <Form.Input  name="price" type="number" label='Price' placeholder='Price' min="0.00" step="0.01" />
          <Form.Input  name="media" type="file" label="Media" accept="image/*" content="Select Image"/>       
        </Form.Group>
        <Form.TextArea  name="description" label='Description' placeholder='Description' />
        <Form.Button type="submit" color="blue">Submit</Form.Button>
      </Form>
    </>
  )
}

export default CreateProduct;
