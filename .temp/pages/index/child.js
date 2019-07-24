import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class Child extends Component {
  /**
   * 在 componentWillUpdate() 之后调用
   * 任何属性变化都会触发这个事件，要加判断使用
   *
   * @param {*} nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.props.flag != nextProps.flag;
    console.log('props 属性变化 --- ' + nextProps.name + ' ~~~ ' + nextProps.obj.key[0].name);
  }

  click() {
    this.props.onTest();
  }

  render() {
    let { name } = this.props;
    return <View onClick={this.click.bind(this)}>
        <Text>我是子节点，{name}</Text>
      </View>;
  }
}

/// props 可以传递任何类型的数据
// 父组件 Key 为 undefinded 的时候，调用 default properties
Child.defaultProps = {
  obj: { key: [{ name: 'aaaa' }] }
};

export default Child;