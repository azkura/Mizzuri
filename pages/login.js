import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Axios from 'axios'
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react'

import { catchErrors } from '../utils/catchErrors'
import { handleLogin } from '../utils/auth'
import baseUrl from '../utils/baseUrl'

const INITIAL_USER = {
  email: "",
  password: ""
}

function Login() {
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
      // make request to signup user
      const url = `${baseUrl}/api/login`
      const payload = { ...user }
      const response = await Axios.post(url, payload)
      handleLogin(response.data)
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return <>
    <Message
      attached
      icon="privacy"
      header="welcome Back!"
      content="Log in with email and password"
      color="blue"
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
          icon="sign in"
          type="submit"
          color="orange"
          content="Login"
          disabled={disabled || loading}
        />
      </Segment>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help"/>
      New user ? { " "}
      <Link href="/signup">
        <a>sign up here</a>
      </Link>{" "}
      instead.
    </Message>
  </>
}

export default Login;
