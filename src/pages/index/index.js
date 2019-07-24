import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import Child from './child'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  /// 通过 setState 管理

  state = {
    name: 'Hello World!!!',
    obj: undefined
  }

  /// 生命周期

  componentWillMount() {
    console.log('第一次渲染之前执行，只执行一次')
    let { name } = this.$router.params
    alert(name)
  }

  componentDidMount() {
    console.log('第一次渲染（render()）之后执行，只执行一次')
    // this.setState({name:'123123'})
    this.setState(
      { name: 'Hello Taro', obj: { key: [{ name: 'objName' }] } },
      () => {
        console.log(
          'call back ' + this.state.name + '...........' + this.state.txt
        )
      }
    )
    // setState 执行之前的值
    console.log(
      'not call back ' + this.state.name + '...........' + this.state.txt
    )
  }

  componentWillUpdate() {
    console.log('state 将要更新')
  }

  componentDidUpdate() {
    console.log('state 已经更新')
  }

  componentWillUnmount() {
    console.log('卸载（页面被销毁，组件被关闭）时执行，只执行一次')
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 检查此次 setState 是否进行 render，返回 false 则不更新
    // 一般多次 setState 调用时提升 render 性能
    // if (nextState.name == '123123') {
    //   return true
    // } else {
    //   return false
    // }
    return true
  }

  componentWillReceiveProps(nextProps) {
    // 父组件传递给子组件的参数发生改变时触发
  }

  componentDidShow() {
    // reactJs 中不存在，小程序需要的
    console.log('页面显示时触发')
  }

  componentDidHide() {
    // reactJs 中不存在，小程序需要的
    console.log('页面隐藏时触发')
  }

  // 给子组件传递方法，h5 可以这样传递事件，小程序不可以
  // 小程序传递的话，需要在属性前面加 on
  test() {
    console.log('父组件传递方法给子组件')
  }

  render() {
    let { name, obj } = this.state
    return (
      <View className="index">
        {/* h5 传递 */}
        {/* <Child name={name} obj={obj} test={this.test} /> */}

        {/* 小程序传递 */}
        <Child name={name} obj={obj} onTest={this.test} />
      </View>
    )
  }
}
