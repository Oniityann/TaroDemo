import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Dialog extends Component {
  render() {
    return (
      <View className="index">
        {this.props.myImg}
        {this.props.children}
      </View>
    )
  }
}
