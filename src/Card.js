import React , {Component} from 'react'
import { Image,Header,Text,Avatar,Provider, Layout } from '@stardust-ui/react'
import excelimage from './image.png'

const size=32;

const theme={
  componentStyles: {
    Header : {
      root:  {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              whiteSpace: 'nowrap',
              marginTop:"12px",
              marginBottom:"0px",
              cursor:"pointer",
              width:"242px"
            }
          },
      },
  }

class Card extends Component {
  render() {
    return (
      <Provider theme={theme}>
             <div>
              <Layout
                    vertical
                    start={this.props.image?
                      <Image 
                          src={this.props.image}
                          styles={() => ({
                            overflow:"hidden",
                            borderRadius: '2%',
                            border: "1px solid #ededed",
                            padding:" 0px",
                            width: "240px",
                            height: "134px",
                            boxShadow:" 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)",
                          })}
                          />: this.renderPreview()
                        }
                    main={<Header as="h4" content={this.props.Header}/>} 
                    end={<Text content={this.props.Text} 
                              styles={{
                                width:"242px",
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                WebkitBoxOrient: 'vertical',
                                whiteSpace: 'nowrap',
                             }} />
                        }

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
          start={<Avatar fluid size={size} image={excelimage} />}
          main = {
            <Text 
                size="larger"
                content={this.props.Content}
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
}

export default Card;
