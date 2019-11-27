import React from 'react'
import { Segment, Button, Container, Icon, Image } from 'semantic-ui-react'

const src1 = '../../static/site.png'

function Featured() {
  return (
    // <Container>
      <Segment
        inverted color="green"
        textAlign='center'
        style={{ 
          minHeight: 400,
          margin: '2em 0em',
        }}
      >
        <HomepageHeading />
      </Segment>
    // </Container>
  )
}

function HomepageHeading () {
  return (
    <Container >
      <Image src={src1} size='medium' centered/>
      <Button inverted  size='medium' style={{ marginTop: '1em'}}>
        BUY A CHAIR
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
}

export default Featured;
