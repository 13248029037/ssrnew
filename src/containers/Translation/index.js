import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom';
import styles from './style.less';
import withStyle from '../../withStyle';
import { observer, inject } from 'mobx-react'
@inject('login')
@observer
class Translation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  render() {
    console.info('xiaoxiaoixapdsfds')
    return <Fragment>
      <Helmet>
        <title>这是DellLee的SSR翻译页面 - 丰富多彩的翻译45454545454343434内容</title>
        <meta name="description" content="这是DellLee的SSR翻译页面 - 丰富多彩的翻译内容" />
      </Helmet>
      <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>   <div className={styles.container}>
        23424
        </div>
      <div className={styles.container}>
        23424
        </div>
    </Fragment>
  }
}

const ExportTranslation = withStyle(Translation, styles);

ExportTranslation.loadData = (store) => {
  return new Promise(resolve => {
    resolve('Translation')
  })
}

export default ExportTranslation;

