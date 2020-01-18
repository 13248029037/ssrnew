import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';
import withStyle from '../../withStyle';
import { observer, inject } from 'mobx-react'
@inject('login')
@observer
class Header extends Component {
  toggleLogin = (tag) => {
    const { toggleLogin } = this.props.login;
    toggleLogin(tag)
  }
  render() {
    const { isLogin, toggleLogin } = this.props.login;
    return (
      <div className={styles.container}>
        <Link to='/' className={styles.item}>首页</Link>
        {
          isLogin ? <Fragment>
            <Link to='/translation' className={styles.item}>翻译列表</Link>
            <div onClick={this.toggleLogin.bind(this, false)} className={styles.item}>退出</div>
          </Fragment> : <div onClick={this.toggleLogin.bind(this, true)} className={styles.item}>登陆</div>
        }
      </div >
    )
  }
}


export default withStyle(Header, styles)

