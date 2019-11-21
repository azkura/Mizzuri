import React, { useState, useEffect } from 'react'
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react'
import Link from 'next/link'
import axios from 'axios'

import { catchErrors } from '../utils/catchErrors'
import baseUrl from '../utils/baseUrl'

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
}

function Signup() {
  const [user, setUser] = useState(INITIAL_USER)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user] )

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      setError('')
      // make request to signupe user
      const url = `${baseUrl}/api/signup`
      const payload = { ...user }
      await axios.post(url, payload)
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return <>
    <Message
      attached
      icon="settings"
      header="Get Started!"
      content="Create a new account"
      color="teal"
    />
    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Message 
        error
        header="Oops"
        content={error}
      />
      <Segment>
        <Form.Input 
          fluid
          icon="user"
          iconPosition="left"
          label="Name"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
         <Form.Input 
          fluid
          icon="envelope"
          iconPosition="left"
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
         <Form.Input 
          fluid
          icon="lock"
          iconPosition="left"
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <Button
          icon="signup"
          type="submit"
          color="orange"
          content="signup"
          disabled={disabled || loading}
        />
      </Segment>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help"/>
      Existing user ? { " "}
      <Link href="/login">
        <a>Log in here</a>
      </Link>{" "}
      instead.
    </Message>
  </>
}

export default Signup;
