
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

/*
<Link to={`games/${props.info.slug}`}>
  More information
</Link>
*/

const urlFriendly = (url) => {
  return url.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '')
}

const CardBox = (props) => (
  <Card
    image={`https://image.tmdb.org/t/p/w500/${props.info.poster_path}`}
    header={props.info.title}
    meta={props.info.overview}
    as={Link}
    to={`movies/${urlFriendly(props.info.title)}`}
    extra={(
      <span>
        <Icon name='star' />
        {props.info.vote_average}/10 
      </span>
    )}
  />
)

export default CardBox