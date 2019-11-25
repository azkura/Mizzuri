import React, { useState, useEffect } from 'react'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import cookie from 'js-cookie'

function AccountPermissions() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const url = `${baseUrl}/api/users`
    const token = cookie.get('token')
    const payload = { headers: { Authorization: token } }
    const response = await axios.get(url, payload)
    setUsers(response.data)
  }

  return <>AccountPermissions</>;
}

export default AccountPermissions;
