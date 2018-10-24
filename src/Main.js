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
    <Card Header="Notes" Text="hsgdhjs" Content="An experimental cache implementation for Apollo Client, tuned for the performance of heavy GraphQL payloads."/>,
    <Card Header="Important" Text="hsgdhjs" image={folder}/>,
    <Card Header="Tasks " Text="Completed ones" Content="Complete Task 1 .o test that two values were exactly identical. To learn about the other things that Jest can test, "/>,
  ]

class Main extends Component {
  render() {
    return (
        <Grid content={cards} />
    )
  }
}

export default Main;
