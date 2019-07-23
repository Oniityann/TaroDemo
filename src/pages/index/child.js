import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Child extends Component {
  /**
   * 在 componentWillUpdate() 之后调用
   * 任何属性变化都会触发这个事件，要加判断使用
   *
   * @param {*} nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.props.flag != nextProps.flag
    console.log(
      'props 属性变化 --- ' +
        nextProps.name +
        ' ~~~ ' +
        nextProps.obj.key[0].name
    )
  }

  render() {
    let { name } = this.props
    return (
      <View>
        <Text>我是子节点，{name}</Text>
      </View>
    )
  }
}

Child.defaultProps = {
  obj: { key: [{ name: 'aaaa' }] }
}

export default Child
