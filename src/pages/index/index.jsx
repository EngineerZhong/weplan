import Taro, { Component } from '@tarojs/taro'
import { View,} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import dayjs from "dayjs";
import { ClLayout,ClCalendar,ClSwitch, ClFlex,ClAvatar } from "mp-colorui";
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

  render () {
    const headerArray = [{
       url: 'https://dalididilo.top/group1/M00/00/00/ezicXV7q-6eAeSxcAAALS9BKCaQ84.JPEG',
       tag: 'male',
       tagColor: 'light-pink'
    }]
    return (
      <View className='index'>
        <ClLayout className='bg-white' padding='small' paddingDirection='around'>
          <ClFlex direction='row' justify='between' align='center'>
              <ClLayout padding='small' paddingDirection='around'>
                <ClAvatar headerArray={headerArray.slice(0, 1)} size='normal' shape='round' />
              </ClLayout>
              <ClLayout padding='small' paddingDirection='around'>
                <ClSwitch type='form'
                  title='签到'
                  shape='normal'
                  color='cyan'
                >
                </ClSwitch>
              </ClLayout>
          </ClFlex>
          <ClCalendar showType='card' calendarType='week' tipDay={[{
            date: dayjs().format("YYYY-MM-DD"),
            tipTop: "已签到",
            tipTopColor: "green",
            tipBottom:dayjs().format("HH:mm"),
            tipBottomColor:'blue'
          }]}
          />
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
