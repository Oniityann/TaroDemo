import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Button } from '@tarojs/components';


// 检测编译环境，可以根据环境变量判断加载样式
const environment = "h5";

export default class Event extends Component {
  state = {
    name: 'event handler'
  };

  componentWillMount() {
    console.log(environment);
  }

  // 有自定义参数的时候，event 是排在最后面的
  testButtonClicked(name, event) {
    // 阻止事件穿透
    event.stopPropagation();
    console.log(name + event);
  }
  render() {
    return <View className="index">
        {/* 对于小程序，只要 JSX 组件传入的参数是函数，参数名就必须以 on 开头 */}
        <Button onClick={this.testButtonClicked.bind(this, this.state.name)}>
          测试事件
        </Button>
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}