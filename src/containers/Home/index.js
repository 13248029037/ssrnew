import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import withStyle from '../../withStyle';
import imgulr from './bg.jpeg'
import paris from './paris.jpeg'
import { inject, observer } from 'mobx-react'
import lessStyle from './style.less'
// import style from 'antd/lib/button/style/index.css'
import { Button } from 'antd';
console.info(lessStyle, 'lessStylelessStylelessStyle')
@inject('footer')
@inject('home')
@inject('login')
@observer
class Home extends Component {
  componentDidMount() {
  }
  constructor(props) {
    super(props)
    // alert('xiao33')
    this.state = {
      arr: [],
      className: ''
    }
  }

  render() {
    const { home, login, footer } = this.props
    return (
      <Fragment>
        <Helmet>
          <title>这是DellLee的SSR新闻页面 -443 丰富多彩的资讯</title>
          <meta name="description" content="这是DellLee的SSR新闻页面 - 丰富多彩的资讯" />
        </Helmet>
        <div className={lessStyle.container44}>
          <Button type="primary">23432432</Button>
          <div className="animated fadeInUp">footer{footer.footer}</div>
          <div>{home.price}</div>
          {home.arr.map(v => <div key={v}>{v}</div>)}
          <img className={this.state.className} src={imgulr}></img>
          <img className={this.state.className} src={paris}></img>
          <div>{home.price}</div>
          {this.state.arr.map(vr =>
            <div key={vr.id}>
              {home.arr.map(v => <div key={v}>{v}</div>)}
              <img className={vr.className1} src={imgulr}></img>
              <img className={vr.className2} src={paris}></img><div>{home.price}</div>
            </div>
          )}
        </div>

      </Fragment >
    )
  }
}
const ExportHome = withStyle(Home, lessStyle);

ExportHome.loadData = (store) => {
  const { getData } = store.home
  return getData()
}

export default ExportHome;

// export default Home
