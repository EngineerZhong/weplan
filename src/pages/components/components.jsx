import Taro, { Component } from '@tarojs/taro'
import { View,Image,ScrollView} from '@tarojs/components'
import { ClLayout,ClFlex,ClAvatar,ClText,ClCard,ClButton, ClTag } from "mp-colorui";
import './components.scss'

class PlanCardComponents extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const xScrollStyle = {
      height: '40px',
      width: '300px'
    }
    const planHeaderArray=[{
      url:'https://dalididilo.top/group1/M00/00/00/ezicXV7q-6eAeSxcAAALS9BKCaQ84.JPEG'
    },{
      url:'https://dalididilo.top/group1/M00/00/00/ezicXV7rKkOARa27AAAOEh7-AvY58.JPEG'
    }]
    return (
      <View className='components'>
        <ClCard bgColor='gray'>
                <ClFlex direction='column' justify='center' align='start'>
                  <ClLayout paddingDirection='left' padding='normal'>
                    <ClTag shape='round' size='normal' tags={[{
                      color:'blue',
                      text:'15 / 1',
                      plain:false,
                      icon:'time'
                    }]}
                    />
                  </ClLayout>
                  <ClLayout paddingDirection='around' padding='normal'>
                    <Image style={{height:'150px',width:'300px'}} src='https://edu-image.nosdn.127.net/477E1C0D535D065A74E67F3660A47BFA.png?imageView&quality=100&thumbnail=230y130' />
                  </ClLayout>
                  <ClLayout paddingDirection='left' padding='normal' marginDirection='top' margin='xsmall'>
                    <ClText text='计划名:四六级小白课堂,15天养成计划。' size='normal' />
                  </ClLayout>
                  <ClLayout paddingDirection='left' padding='normal'  marginDirection='top' margin='xsmall'>
                    <ClText text='描述:语言学习还是要基础的，技巧什么的只是锦上添花而已.' size='xsmall' />
                  </ClLayout>
                  <ClLayout  paddingDirection='left' padding='normal'  marginDirection='top' margin='xsmall'>
                            <ScrollView
                              scrollX
                              scrollWithAnimation
                              style={xScrollStyle}
                            >
                              <ClFlex direction='row' >
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(0,1)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(1,2)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(0,1)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(1,2)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(0,1)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(1,2)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(0,1)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(1,2)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(0,1)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(1,2)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(0,1)} size='small' shape='round' shadow />
                                </ClLayout>
                                <ClLayout marginDirection='left' margin='xsmall'>
                                  <ClAvatar headerArray={planHeaderArray.slice(1,2)} size='small' shape='round' shadow />
                                </ClLayout>
                              </ClFlex>
                            </ScrollView>
                  </ClLayout>
                  <ClLayout marginDirection='horizontal' margin='normal' style={{width:'300px'}}>
                    <ClButton shape='round' size='small' bgColor='blue' long>签到</ClButton>
                  </ClLayout>    
                </ClFlex>
              </ClCard>
      </View>
    )
  }
}

export default PlanCardComponents
