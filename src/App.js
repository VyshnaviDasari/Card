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
              marginBottom:"0px",
              cursor:"pointer",
              width:"242px"
            }
          },
      },
  }

class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
             <div>
              <Layout
                    vertical
                    start={
                      <Image 
                          src={excelimage}
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
                        }
                    main={<Header as="h4" content="First Header may be initiated by the following people"/>} 
                    end={<Text content="This text is semilight"/>}

                    styles={() => ({
                      width:"242px",
                      height: "190px",
                      margin:"10px",
                    })}
                />

              <Divider/>

              <Layout
                    vertical
                    start={this.renderPreview()}
                    main={<Header as="h4" content="First Header" />}
                    end={<Text weight="regular" content="This text is semi light and also glow ."/>}

                    styles={() => ({
                      width:"242px",
                      height: "190px",
                      margin:"10px",
                    })}
                />
            </div>
     </Provider>
    )
  }

  renderPreview(): React.ReactNode {
    return (
      <Layout
          vertical
          // start={this.renderGroup()}
          start={<Avatar fluid size={size} image={excelimage} />}
          main = {
            <Text 
                size="larger"
                content="This is an example of a card component with Text as the content for the pre card and card desc
                followed by people and may may be may not be vyshnavi is a good gorld"
                styles={() => ({
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
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
            padding:" 5px",
            width: "240px",
            height: "134px",
            boxShadow:" 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)",
          })}
          
      />
    )
  }

  // renderGroup(): React.ReactNode {
  //   return (
  //       <div>
  //        <Avatar size={size} image={excelimage} />
  //        <Text 
  //               size="larger"
  //               content="This is an example of a card component with Text as the content for the pre card and card desc
  //               followed by people and may may be may not be vyshnavi is a good gorld"
  //               styles={() => ({
  //                 display: '-webkit-box',
  //                 WebkitLineClamp: 3,
  //                 WebkitBoxOrient: 'vertical',
  //                 overflow: 'hidden',
  //                 lineHeight: 1.8,
  //                 textOverflow: 'ellipsis',
  //                 marginBottom:"8px",
  //               })}
  //         />
  //         </div>
  //   )
  // }
}

export default App;
