import{
  View,
  ScrollView,
  Image,
  Text,
  WebView,
} from 'react-native';

var DEFAULT_URL = 'http://www.lcode.org';

export default class App extends Component<{}> {
    render() {
        return (
//                  <WebView
//                    style={webView_style2}
//                    scrollEnabled={false}
//                    javaScriptEnabled={true}
//            //        injectedJavaScript={'插入到h5页面中的js代码'}
//            //        onMessage={event => {'接收h5页面传过来的消息'}}
//                    source={{uri: 'https://blog.csdn.net/LJFPHP/article/details/78917526'}}
//                  ></WebView>


                    <View style={{flex:1}}>
                        <Text style={{height:40}}>简单的网页显示</Text>
                        <WebView style={styles.webview_style}
                          url={DEFAULT_URL}
                          startInLoadingState={true}
                          domStorageEnabled={true}
                          javaScriptEnabled={true}
                          >
                        </WebView>
                      </View>

                );
    }


}


const styles = StyleSheet.create({
    webView_style2: {
        height: it.state.webview_h,width: gScreen.width
    },
    webview_style:{
           backgroundColor:'#00ff00',
        }
});





//    detail_webview(){
//        /*
//        * scrollEnabled:是否允许滚动
//        * javaScriptEnabled 是否允许插入JS代码到webview里面
//        * injectedJavaScript  插入到webview的<head></head>标签中的JS代码
//        * onMessage:获取webview传过来的数据
//        * source:这个部分可以是webview页面的url，也可以是直接的html代码
//        * */
//        let it = this;
//        let {params} = it.props.navigation.state;
//        let webView_style = {height: it.state.webview_h,width: gScreen.width};
//        return (
//          <WebView
//            style={webView_style}
//            scrollEnabled={false}
//            javaScriptEnabled={true}
//    //        injectedJavaScript={'插入到h5页面中的js代码'}
//    //        onMessage={event => {'接收h5页面传过来的消息'}}
//            source={{uri: 'https://blog.csdn.net/LJFPHP/article/details/78917526'}}
//          ></WebView>
//        );
//      }