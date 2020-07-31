import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import dayjs from "dayjs";
import { ClLayout,ClCalendar,ClSwitch
  ,ClFlex,ClAvatar,ClText,ClIcon,ClModal,ClForm, ClFormItem,ClInput} from "mp-colorui";
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

  constructor(props) {
    super(props);
    this.state = {
      isShow:false,
      plan:{
        img_url:'',
        title:'',
        descr:''
      }
    }
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

  // setIsShow = (status) =>{
  //     console.log("点击到修改状态" + status);
  //     this.setState({
  //       isShow:status
  //     })
  // }

  showAddModel=()=>{
    console.log("点击到");
    this.setState({
      isShow:true
    })
  }

  refFunc = node => {
    this.ref = node;
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
    let that = this;
    var availableHeight = getWindowHeight(true);
    return (
      <View className='index'>
        <ClModal
          show={this.state.isShow}
          closeWithShadow
          title='我是标题'
          close
          actions={[
            {
              text: '取消',
              color: 'red'
            },
            {
              text: '确认',
              color: 'blue'
            }
          ]}
          onCancel={() => {
            that.setState({
              isShow:false
            })
          }}
          onClose={() => {
            that.setState({
              isShow:false
            })
          }}
          onClick={index => {
            if(index === 0){
              that.setState({
                isShow:false
              })
            }else{
              console.log('业务实际逻辑操作。');
            }
          }}
        >
          <ClLayout>
            <ClForm ref={this.refFunc} model={this.state.plan}>
              <ClFormItem prop='title' required>
                <ClInput
                  title='请输入标题'
                  value={this.state.plan.title}
                  onBlur={value => {
                    this.setState({
                      model: {
                        ...this.state.model,
                        title: value
                      }
                    });
                  }}
                />
              </ClFormItem>
            </ClForm>
          </ClLayout>
        </ClModal>
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
          <ClCalendar activeColor='blue' showType='card' calendarType='week' tipDay={signTipsDay} />
        </ClLayout>
        <ClLayout className='bg-white' margin='xsmall' marginDirection='top' paddingDirection='around' padding='small'>
            <ClFlex direction='row' justify='between'>
              <ClLayout paddingDirection='left' padding='normal'>
                <ClFlex direction='row' align='center'>
                    <ClIcon iconName='title' size='small' color='blue'></ClIcon>
                    <ClLayout padding='small' paddingDirection='left'>
                        <ClText text='我的计划' size='normal' />
                    </ClLayout>
                </ClFlex>
              </ClLayout>
              <View onClick={this.showAddModel}>
                <ClLayout paddingDirection='right' padding='normal' >
                  <ClFlex direction='row' align='center'>
                      <ClIcon iconName='add' size='small' color='blue'></ClIcon>
                      <ClText text='添加' size='normal' />
                  </ClFlex>
                </ClLayout>
              </View>
            </ClFlex>
            <ClLayout paddingDirection='top' padding='small'>
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
