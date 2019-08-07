import React, { Component } from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import { getPopularMovies } from './../../services/movies'
import { CardBox } from './../../components/card'

class HomePage extends Component {
  state = {
    show: false,
    movies: []
  }

  componentWillMount = async () => {
    const movies = await getPopularMovies();

    this.setState(() => ({
      show: true,
      movies
    }))
  }

  render() {
    return (
      <Container style={{ marginTop: '5em' }}>
        <Header as='h1'>Popular Movies</Header>
        <Card.Group itemsPerRow={4}>
          {this.state.show && this.state.movies.map(movie => <CardBox key={movie.id} info={movie} />)}
        </Card.Group>
      </Container>
    )
  }
}

export default HomePage