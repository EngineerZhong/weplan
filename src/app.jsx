import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/trend/index',
      'pages/me/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: "black",
      selectedColor: "#6eb6ff",
      backgroundColor: "#ffffff",
      color: "#c7c7c7",
      list: [
        {
          pagePath: "pages/index/index",
          selectedIconPath: "./sources/imgs/icons/weplan_selected.png",
          iconPath: "./sources/imgs/icons/weplan_normal.png",
          text: "微计划"
        },{
          pagePath: "pages/trend/index",
          selectedIconPath: "./sources/imgs/icons/trend_selected.png",
          iconPath: "./sources/imgs/icons/trend_normal.png",
          text: "排行榜"
        },
        {
          pagePath: "pages/me/index",
          selectedIconPath: "./sources/imgs/icons/me_selected.png",
          iconPath: "./sources/imgs/icons/me_normal.png",
          text: "我"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
