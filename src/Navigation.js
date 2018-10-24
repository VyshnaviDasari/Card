import React , {Component} from 'react'
import { Menu } from '@stardust-ui/react'



const items = [
    { key: 'editorials', content: 'Editorials' },
    { key: 'review', content: 'Reviews' },
    { key: 'events', content: 'Upcoming Events' },
  ]
  

class Navigation extends Component {
  render() {
    return (
        <Menu defaultActiveIndex={0} items={items} pills vertical />
    )
  }
}

export default Navigation;
