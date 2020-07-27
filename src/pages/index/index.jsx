import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import dayjs from "dayjs";
import { ClLayout,ClCalendar,ClSwitch
  ,ClFlex,ClAvatar,ClText,ClIcon,ClCard,ClButton } from "mp-colorui";
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '微计划'
  }

  

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  render () {
    const headerArray = [{
       url: 'https://dalididilo.top/group1/M00/00/00/ezicXV7q-6eAeSxcAAALS9BKCaQ84.JPEG',
       tag: 'male',
       tagColor: 'blue'
    }]
    const planArray = [{
      url:'https://edu-image.nosdn.127.net/477E1C0D535D065A74E67F3660A47BFA.png?imageView&quality=100&thumbnail=230y130'
    }]

    const planHeaderArray=[{
      url:'https://dalididilo.top/group1/M00/00/00/ezicXV7q-6eAeSxcAAALS9BKCaQ84.JPEG'
    },{
      url:'https://dalididilo.top/group1/M00/00/00/ezicXV7rKkOARa27AAAOEh7-AvY58.JPEG'
    }]
    const scrollTop = 0
    const Threshold = 20
    const scrollStyle = {
      height: '450px'
    }
    const xScrollStyle = {
      height: '40px',
      width: '300px'
    }
    return (
      <View className='index'>
        <ClLayout className='bg-white' padding='small' paddingDirection='around'>
          <ClFlex direction='row' justify='between' align='center'>
              <ClLayout marginDirection='left' margin='normal' padding='small' paddingDirection='around'>
                <ClFlex direction='row' align='center'>
                  <ClAvatar headerArray={headerArray.slice(0, 1)} size='normal' shape='round' />
                  <ClLayout padding='normal' paddingDirection='left'>
                    <ClText text='大离弟弟咯。' size='normal' />
                  </ClLayout>
                </ClFlex>
              </ClLayout>
              <ClLayout padding='small' paddingDirection='around'>
                <ClSwitch type='form'
                  title='签到'
                  shape='normal'
                  color='blue'
                >
                </ClSwitch>
              </ClLayout>
          </ClFlex>
          <ClCalendar activeColor='blue' showType='card' calendarType='week' tipDay={[{
            date: dayjs().format("YYYY-MM-DD"),
            tipTop: "已签到",
            tipTopColor: "green",
            tipBottom:dayjs().format("HH:mm"),
            tipBottomColor:'blue'
          }]}
          />
        </ClLayout>
        <ClLayout className='bg-white' margin='xsmall' marginDirection='top' paddingDirection='around' padding='small'>
            <ClFlex direction='row' align='center'>
                <ClIcon iconName='list' size='small' color='blue'></ClIcon>
                <ClLayout padding='normal' paddingDirection='left'>
                    <ClText text='我的计划' size='normal' />
                </ClLayout>
            </ClFlex>
            <ScrollView
              className='scrollview'
              scrollY
              scrollWithAnimation
              scrollTop={scrollTop}
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScroll}
            >
              <ClCard active bgColor='gray'>
                <ClFlex direction='column' justify='center' align='start'>
                  <ClLayout paddingDirection='around' padding='small'>
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
            </ScrollView>
        </ClLayout>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View> */}
      </View>
    )
  }
}

export default Index
