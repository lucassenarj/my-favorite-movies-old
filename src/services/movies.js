import axios from 'axios'

export const getPopularMovies = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/movie/popular${process.env.REACT_APP_API_KEY}`)
  .then(movies => movies.data.results)
}