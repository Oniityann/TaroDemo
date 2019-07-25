import Taro, { Component } from "@tarojs/taro-h5";


import './app.css';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from "nervjs";
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis(_taroHistory);
class App extends Component {
  config = {
    pages: ["/pages/index/index", "/pages/event/event", "/pages/dialog/testDialog", "/pages/test/test"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Router history={_taroHistory} routes={[{
      path: '/pages/index/index',
      componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
      isIndex: true
    }, {
      path: '/pages/event/event',
      componentLoader: () => import( /* webpackChunkName: "event_event" */'./pages/event/event'),
      isIndex: false
    }, {
      path: '/pages/dialog/testDialog',
      componentLoader: () => import( /* webpackChunkName: "dialog_testDialog" */'./pages/dialog/testDialog'),
      isIndex: false
    }, {
      path: '/pages/test/test',
      componentLoader: () => import( /* webpackChunkName: "test_test" */'./pages/test/test'),
      isIndex: false
    }]} customRoutes={{}} />;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

}

Nerv.render(<App />, document.getElementById('app'));