import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Test extends Component {
  config = {
    navigationBarTitleText: '测试页面'
  }

  state = {
    list: [
      { id: 1, name: 'item1' },
      { id: 2, name: 'item2' },
      { id: 3, name: 'item3' },
      { id: 4, name: 'item4' },
      { id: 5, name: 'item5' }
    ]
  }

  onJumpButtonClick() {
    Taro.navigateTo({
      url: '/pages/index/index?name=张三'
    })
  }

  // getDom() {
  // H5 中的写法，Taro 里定义 JSX 语法必须在 render 方法中
  // }

  render() {
    let dom = null

    // 短链语句，真情况渲染 button
    dom = !true || <Button onClick={this.onJumpButtonClick}>Jump</Button>

    let { list } = this.state

    return (
      <View className="index">
        {dom}
        {/* Taro 中 map 里面不可以使用 if else，只能先处理数据再做渲染 */}
        {list.map((item, index) => {
          return (
            /** key 优化渲染 */
            <View key={index}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
