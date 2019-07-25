import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Dialog extends Component {
  render() {
    return (
      <View className="index">
        // 接收自定义属性
        {this.props.myImg}
        {this.props.children}
      </View>
    )
  }
}
