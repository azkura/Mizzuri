import React from 'react'

import { Form, Image, Message, Header, Icon } from 'semantic-ui-react'

const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
}

const  CreateProduct = () => {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT)
  const [mediaPreview, setMediaPreview] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  const handleChange = (event) => {
    const {name, value, files} = event.target
    if(name === 'media') {
      setProduct(prevState => ({...prevState, media: files[0] }))
      setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }))
    }
    // console.log(product)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(product)
    setProduct(INITIAL_PRODUCT)
    setSuccess(true)
  }

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create new Product
      </Header>
      <Form success={success} onSubmit={handleSubmit}>
        <Message icon success>
          <Icon name='check' />
          <Message.Content>
            <Message.Header>Success!</Message.Header>
            Your product has been posted
          </Message.Content>
        </Message>
        <Form.Group widths='equal'>
          <Form.Input 
            name="name"
            value={product.name}
            label='Name'
            placeholder='Name'
            type="text"
            onChange={handleChange}
          />
          <Form.Input
            name="price"
            value={product.price}
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
        <Image src={mediaPreview} rounded centered size="small" />
        <Form.TextArea
          name="description" 
          value={product.description}
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
