import React, { useState } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Button, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

import Nprogress from 'nprogress'

Router.onRouteChangeStart = () => Nprogress.start()
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()

import HomepageHeading from './HomePageHeading'

const Header = ({children, user}) => {
  console.log(user)
  const [fixed, setFixed] = useState()

  const router = useRouter()

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
        <Segment
          inverted
          textAlign='center'
          style={{ 
            minHeight: 500, 
            padding: '1em 0em', 
            marginBottom: '6em',
          }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
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

            { user && (
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
                    inverted={!fixed} 
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
                      inverted={!fixed}
                      primary={fixed} 
                    > Log in
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button 
                      active={isActive('/signup')}
                      inverted={!fixed} 
                      primary={fixed} 
                      style={{ marginLeft: '0.5em' }}
                    > Sign up
                    </Button>
                  </Link>
                </Menu.Item>
              </>
            )} 
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>
        {children}
    </Responsive>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header