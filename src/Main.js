import React , {Component} from 'react'
import { Grid} from '@stardust-ui/react'
import Card from './Card'
import excelimage from './image.png'
import folder from './folder.png'
import Balloons from './Balloons.jpg'

const cards = [
    <Card Header="Image.png" Text="hsgdhjs" image={Balloons}/>,
    <Card Header="Some Text" Text="To be remebered" Content="You can run Jest directly from the CLI (if it's globally available in your PATH, e.g. by yarn global add jest) with a variety of useful options."/>,
    <Card Header="Downloads" Text="Most recent folder" image={folder}/>,
    <Card Header="Collections.ppt" Text="Team with three" Content="As a result, reads from the cache require minimal work and can be optimized to constant time lookups in some cases there may be additional fields."/>,
    <Card Header="Salary" Text="December Month" image={excelimage}/>,
    ]

class Main extends Component {
  render() {
    return (
        <Grid content={cards} />
    )
  }
}

export default Main;
