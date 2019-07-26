import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

export default class Dialog extends Component {
  render() {
    return <View className="index">
        // 接收自定义属性
        {this.props.myImg}
        {this.props.children}
      </View>;
  }
}