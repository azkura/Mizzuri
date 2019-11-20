import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Header, Icon, Image } from 'semantic-ui-react'

const src1 = '../../static/site.png'


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image src={src1} size='medium' centered />
    <Button inverted  size='medium'>
      BUY A CHAIR
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading