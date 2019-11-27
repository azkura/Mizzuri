import React, { useState } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Button, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'
import { handleLogout } from '../../utils/auth'

import Nprogress from 'nprogress'

Router.onRouteChangeStart = () => Nprogress.start()
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()

const Header = ({children, user}) => {
  const router = useRouter()
  const isRoot = user && user.role === 'root'
  const isAdmin = user && user.role === 'admin'
  const isRootOrAdmin = isRoot || isAdmin

  const [fixed, setFixed] = useState()

  const isActive = (route) => {
    return route === router.pathname
  }

  return(
    <Responsive>
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Menu
          fixed={fixed ? 'top' : null}
          // inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'
        >
          <Link href="/">
            <Menu.Item active={isActive('/')}>Mizzuri</Menu.Item>
          </Link>

          <Link href="/cart">
            <Menu.Item active={isActive('/cart')}>Cart</Menu.Item>
          </Link>

          { isRootOrAdmin && (
            <Link href="/create">
              <Menu.Item active={isActive('/create')}>Create</Menu.Item>
            </Link>
          )}

          {user ? (
            <>
              <Link href="/account">
                <Menu.Item  active={isActive('/account')}>Account</Menu.Item>
              </Link>

              <Menu.Item position='right' >
                <Button
                  onClick={handleLogout}
                  // inverted={!fixed} 
                  primary={fixed} 
                > Log out
                </Button>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item position='right'>
                <Link href="/login">
                  <Button
                    active={isActive('/login')} 
                    // inverted={!fixed}
                    primary={fixed} 
                  > Log in
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button 
                    active={isActive('/signup')}
                    // inverted={!fixed} 
                    primary={fixed} 
                    style={{ marginLeft: '0.5em' }}
                  > Sign up
                  </Button>
                </Link>
              </Menu.Item>
            </>
          )} 
        </Menu>
      </Visibility>
        {children}
    </Responsive>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header