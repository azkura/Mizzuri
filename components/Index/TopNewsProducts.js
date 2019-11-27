






import React from 'react'
import { Grid, Image, Container, Segment, Icon, Header, Divider, Button, Search } from 'semantic-ui-react'
const src1 = '../../static/site.png'


const TopNewsProducts  = () => (
  <>
    <Grid columns={2} container={true} stackable>
      <Grid.Column>
        <Segment  
          inverted color='olive'
        >
          <Grid columns={2} textAlign='center'>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header>Find Country</Header>
                <Container>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  </p>
                </Container>
                <Button primary>Create</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src={src1} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Grid columns={2}  textAlign='center'>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header>Find Country</Header>
                <Container>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  </p>
                </Container>
                <Button primary>Create</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src={src1} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  </>
)

export default TopNewsProducts 



























// import React from 'react'
// import {
//   Button,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Segment,
//   Image
// } from 'semantic-ui-react'

// const src1 = '../../static/site.png'


// const TopNewsProducts = () => (
//   <Segment inverted>
//     <Grid columns={2} textAlign='center' divided>
//       <Grid.Row verticalAlign='middle'>
//         <Grid.Column>
//           <Header as='h2' attached='top' inverted>
//             Attached Header
//           </Header>
//           <Segment attached inverted>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//             commodo consequat.
//           </Segment>
//         </Grid.Column>

//         <Grid.Column>
//           <Header>
//           <Image src={src1} size='large' />
//           </Header>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </Segment>
// )

// export default TopNewsProducts