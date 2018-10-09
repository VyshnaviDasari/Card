import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, themes } from '@stardust-ui/react'
import excelimage from './image.png'

import App from './App'

ReactDOM.render(
  <Provider theme={themes.teams}>
    {/* <App Header="First Header" Text="This text is semi light and also glow may be noy." image={excelimage}/> */}
    <App Header="First Header" Text="This text is semi light and also glow may be noy."
         Content="You can optionally provide a name for your mock functions, which will be displayed instead of jest in test error output.
          Use this if you want to be able to quickly identify the mock function reporting an error in your test output."/>
  </Provider>,
  document.getElementById('root'),
)