import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Text, Button, Image } from '@tarojs/components';
import Dialog from "./dialog";

export default class TestDialog extends Component {
  render() {
    return <View className="index">
        <Dialog>
          <Text>I am a transfered component.</Text>
        </Dialog>
        {/* 通过自定义组件传入更多组件 */}
        <Dialog myImg={<Image src={require('../../img/ipad.png')} />}>
          <Image src={require('../../img/ipad.png')} />
        </Dialog>
        <Dialog>
          <Button>Hit me.</Button>
        </Dialog>
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