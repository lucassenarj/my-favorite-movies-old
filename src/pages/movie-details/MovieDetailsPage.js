import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class MovieDetailsPage extends Component {
  render() {
    return (
      <Container style={{ marginTop: '5em' }}>
        <Header as='h1'>
          {this.props.match.params.id}
        </Header>
      </Container>
    )
  }
}

export default MovieDetailsPage
