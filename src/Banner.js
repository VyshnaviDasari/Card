import React , {Component} from 'react'
import { Layout , Text ,Icon } from '@stardust-ui/react'
  

class Banner extends Component {
  render() {
    return (
      <Layout 
      start= {<Icon name="bookmark" bordered/>}
      main={<Text content="Collections    Personal  Explore  All Settings"/>} 
      end={<Icon name="menu"/>}/>
    )
  }
}

export default Banner;


