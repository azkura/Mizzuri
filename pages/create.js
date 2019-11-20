import React from 'react'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import { catchErrors } from '../utils/catchErrors'

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
  const [loading, setLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const isProduct = Object.values(product).every(el => Boolean(el))
    isProduct ? setDisabled(false) : setDisabled(true)
  }, [product])

  const handleChange = (event) => {
    const {name, value, files} = event.target
    if(name === 'media') {
      setProduct(prevState => ({...prevState, media: files[0] }))
      setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }))
    }
  }

  const handleImageUpload = async () => {
    const data = new FormData()
    data.append('file', product.media)
    data.append('upload_preset', 'mizzuri')
    data.append('cloud_name', 'thezeez')
    const response = await axios.post(process.env.CLOUDINARY_URL, data)
    const mediaUrl = response.data.url
    return mediaUrl
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true)
      const mediaUrl = await handleImageUpload()
      console.log({ mediaUrl })
      const url = `${baseUrl}/api/product`
      // const payload = { ...product, mediaUrl} or =>
      const { name, price, description } = product
      const payload = { name, price, description, mediaUrl}
      const response = await axios.post(url, payload)
      console.log(response)
      setLoading(false)
      setProduct(INITIAL_PRODUCT)
      setSuccess(true)

    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create new Product
      </Header>
      <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit}>
        <Message icon error>
          <Message.Content>
            <Message.Header>Oops!</Message.Header>
            { error }
          </Message.Content>
        </Message>
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
        <Form.Button 
          disabled={disabled || loading} 
          type="submit" color="blue">
          Submit
        </Form.Button>
      </Form>
    </>
  )
}

export default CreateProduct;
