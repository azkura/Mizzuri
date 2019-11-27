import { Container, Grid, Header, Segment, List } from 'semantic-ui-react'
import BestSellers from '../Index/BestSellers'

const FooterContainer = () => {
  return (
    <>
     <div class="ui card">
      <div class="content">
        <a class="ui right blue ribbon label">popular</a>
        <div class="ui bordered rounded centered image">
          <a href="/path/to/link">
            <svg width="100" height="100">
              <image href="image.jpg" x="0" y="0" width="100%" height="100%"></image>
            </svg>
          </a>
        </div>
      </div>
        <div class="content">
          <a href="/path/to/link">
            <div class="header">This OR That</div>
            <div class="meta">Quizzes</div>
          </a>
        </div>
    </div>
    <BestSellers />
     <Segment
        inverted color="green"
        textAlign='center'
        style={{ 
          minHeight: 400,
          margin: '2em 0em',
        }}
      >
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
      </Segment>
      <Segment
        inverted color="grey"
        textAlign='center'
        style={{ 
          minHeight: 400,
          margin: '2em 0em',
        }}
      >
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
      </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em', marginTop: '6em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </>
  )
}

export default FooterContainer