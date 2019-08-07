import React from 'react'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <Link to='/'>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          My Favorite Movies
        </Link>
      </Menu.Item>
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>

      <Dropdown item simple text='Dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
)

export default Header