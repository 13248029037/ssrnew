import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from '../App';
// import Home from '../containers/Home';
// import Translation from '../containers/Translation';
// import NotFound from '../containers/NotFound';

// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户

function Loading() {
  return <div></div>;
}
const LoadableComponent = (loader) => Loadable({
  loader,
  loading: Loading
})
console.info(LoadableComponent, 'LoadableComponentLoadableComponentLoadableComponentLoadableComponent')
export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: '/',
      component: LoadableComponent(() => import(/* webpackChunkName: "home" */'../containers/Home')),
      exact: true,
      key: 'home'
    }, {
      path: '/translation',
      component: LoadableComponent(() => import(/* webpackChunkName: "/translation" */'../containers/Translation')),
      exact: true,
      key: 'translation'
    },
    {
      component: LoadableComponent(() => import(/* webpackChunkName: "notfound" */'../containers/NotFound')),
    }
  ]
}];