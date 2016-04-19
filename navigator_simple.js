/**
 * Created by wangchenlong on 16/4/17.
 */
'use strict'; // 启用严格模式

var React = require('react-native'); // 引用React库

var {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
  } = React; // 使用简写

// 使用Component的好处是, 可以自动生成注释
class FirstPage extends Component {
  /**
   * 给Navigator传递参数
   * @param name 参数
   * @private
   */
  _navigate(name, type = 'Normal') {
    this.props.navigator.push({
      component: SecondPage,
      passProps: {
        name: name
      },
      type: type
    })
  }

  render() {
    // 点击按钮使用Home页面入栈
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headText}>
            {'第一页'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this._navigate('你好! (来源第一页:右出)')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(右出)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this._navigate('你好! (来源第一页:底出)', 'Bottom')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(底部)'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// 第二页, 点击跳出返回第一页
class SecondPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headText}>
            第二页: {this.props.name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigator.pop()}>
          <Text style={styles.buttonText}>
            返回上一页
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// 主模块
class SimpleView extends Component {
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  /**
   * 渲染场景, 通过不同参数, 设置不同页面
   * @param route 路由, 场景信息
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  //renderScene(route, navigator) {
  //  if (route.name == 'FirstPage') {
  //    return <FirstPage navigator={navigator} {...route.passProps}/>
  //  } else if (route.name == 'SecondPage') {
  //    return <SecondPage navigator={navigator} {...route.passProps}/>
  //  }
  //}

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{component: FirstPage}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  // 导航栏
  heading: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1046',
    marginBottom: 10
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18
  }
});

module.exports = SimpleView; // 导出模块