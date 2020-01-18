import React from 'react';
import Header from './components/Header/';
import { renderRoutes } from 'react-router-config';
import withStyle from './withStyle';
// import style from '../init.css'
import style from './lib/animate.css'
// console.info(style, 'sssss')
// import style from 'antd/lib/button/style/index.css'
// import 'antd/es/button/style/css';
// import 'antd/dist/antd.css';
// console.info(style._getCss(), 'styleeeeeee')
// import style from 'antd/dist/antd.less'
// console.info(style, 'styleeerere')
// const App = (props) => {
//   return (
//     <div>
//       <Header staticContext={props.staticContext} />
//       {renderRoutes(props.route.routes)}
//     </div>
//   )
// }
class App extends React.Component {
  componentDidMount() {
    alert(23232222233333333)
  }
  render() {
    const props = this.props
    return <div>
      <Header staticContext={props.staticContext} />
      {renderRoutes(props.route.routes)}
    </div>
  }
}
App.loadData = (store) => {
  const { getData } = store.footer
  return getData()
}
// export default withStyle(App, style)
export default App


