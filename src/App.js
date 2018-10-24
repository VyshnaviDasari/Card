import React , {Component} from 'react'
import Navigation from './Navigation'
import Main from './Main'
import Banner from './Banner'
import { Layout } from '@stardust-ui/react';

class App extends Component {
  render() {
    return (
        <div>
          <Layout vertical
            start={<Banner />}
            main={
              <Layout
                start={<Navigation />}
                main={<Main />}
               />
            }
          />
        </div>
    )
  }
}

export default App;
