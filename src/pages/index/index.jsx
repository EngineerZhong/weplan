import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import dayjs from "dayjs";
import { ClLayout,ClCalendar,ClSwitch
  ,ClFlex,ClAvatar,ClText,ClIcon} from "mp-colorui";
import {PlanCardComponents} from "../components/components"
import { add, minus, asyncAdd } from '../../actions/counter'
import {getWindowHeight} from '../../utils/style'
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
  }

  render () {
    const headerArray = [{
       url: 'https://dalididilo.top/group1/M00/00/00/ezicXV7q-6eAeSxcAAALS9BKCaQ84.JPEG',
       tag: 'male',
       tagColor: 'blue'
    }]
    const scrollTop = 0
    const Threshold = 20
    const scrollStyle = {
      height: '450px'
    }
    const signTipsDay =[
      {
        date: dayjs().format("YYYY-MM-DD"),
        tipTop: "已签到",
        tipTopColor: "green",
        tipBottom:dayjs().format("HH:mm"),
        tipBottomColor:'blue'
      },
      {
        date: dayjs().add(1,"day").format("YYYY-MM-DD"),
        tipTop: "已签到",
        tipTopColor: "green",
        tipBottom:dayjs().format("HH:mm"),
        tipBottomColor:'blue'
      },
      {
        date: dayjs().add(2,"day").format("YYYY-MM-DD"),
        tipTop: "已签到",
        tipTopColor: "green",
        tipBottom:dayjs().format("HH:mm"),
        tipBottomColor:'blue'
      }
    ]

    var availableHeight = getWindowHeight(true);
    return (
      <View className='index'>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={{ height: availableHeight}}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
          refresherEnabled
          refresherDefaultStyle='black'
        >
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
          <ClCalendar activeColor='blue' showType='card' calendarType='week' tipDay={signTipsDay}/>
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
              refresherEnabled
              refresherDefaultStyle='black'
            >
              <PlanCardComponents />
              <PlanCardComponents />
              <PlanCardComponents />
            </ScrollView>
        </ClLayout>
        </ScrollView>
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
