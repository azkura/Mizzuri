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

const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState()

  const router = useRouter()
  const user = false

  const isActive = (route) => {
    return route === router.pathname
  }

  const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  return(
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
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

            { user && (<Link href="/create">
              <Menu.Item active={isActive('/create')}>Create</Menu.Item>
            </Link>)}

            {user ? (<>
              <Link href="/account">
                <Menu.Item  active={isActive('/account')}>Account</Menu.Item>
              </Link>
              <Menu.Item position='right' active={isActive('/logout')}>
              <Button 
                href="/logout" 
                inverted={!fixed} 
                primary={fixed} 
                style={{ marginLeft: '0.5em' }}
              >
                Sign Up
              </Button>
              </Menu.Item>
            </>) 
            :
            (<>
              <Link href="/login">
                <Menu.Item position='right'>
                  <Button href="/login" inverted={() => setFixed(false)}>
                    Log in
                  </Button>
                </Menu.Item>                
              </Link>
            </>)} 
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>
        {children}
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer