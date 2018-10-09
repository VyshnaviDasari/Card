import React , {Component} from 'react'
import { Image,Header,Text,Avatar,Provider,Divider, Layout } from '@stardust-ui/react'
import excelimage from './image.png'
import './App.css';
const size=32;

const theme={
  componentStyles: {
    Header : {
      root:  {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              whiteSpace: 'nowrap',
              marginTop:"8px",
              marginBottom:"1px",
            }
    },
  },
}

class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
            <div>
              <div className="card">
                <div className="preview"><Image  src={excelimage}/></div>
                <Header as="h3" content="First Header" />
                <Text content="This text is semilight." />
              </div>
              <Divider/>
              <Layout
                    vertical
                    start={this.renderPreview()}
                    main={<Header as="h4" content="First Header " />}
                    end={<Text content="This text is semilight i m so glab ." />}
                />
                  
              {/* <div className="card" >
                  <div className="preview" >

                        <div
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.8,
                            textOverflow: 'ellipsis',
                            marginBottom:"8px",
                          }}
                      >
                          <Avatar fluid size={size} image={excelimage} />
                          <Text size="larger">
                            This is an example of a card component with Text as the content for the pre card and card desc
                            followed by people and may may be may not be vyshnavi is a good gorld
                          </Text>
                        </div>
                          <Text size="medium" weight="semibold"> 6:43 AM </Text>
                    </div>

                  <div>
                    <Header as="h4" content="First Header " />
                    <Text content="This text is semilight i m so glab ." />
                  </div>
                </div> */}

            </div>
     </Provider>
    )
  }

  renderPreview(): React.ReactNode {
    return (
      <Layout
          vertical
          start={<Avatar fluid size={size} image={excelimage} />}
          main = {
            <Text 
                size="larger"
                content="This is an example of a card component with Text as the content for the pre card and card desc
                followed by people and may may be may not be vyshnavi is a good gorld"
                styles={() => ({
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: 1.8,
                  textOverflow: 'ellipsis',
                  marginBottom:"8px",
                })}
          />
          
          }
          end={ <Text  size="medium" content="6:43 AM"/>}
        
        styles={() => ({
          overflow:"hidden",
          borderRadius: '2%',
          border: "1px solid #ededed",
          padding:" 0px",
          width: "240px",
          height: "134px",
          boxShadow:" 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)",
        })}
        
      />
    )
  }
}

export default App;
