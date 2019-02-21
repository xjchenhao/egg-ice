import React from 'react';
import ReactDOM from 'react-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import { HashRouter } from 'react-router-dom';

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';

import router from './router';

// const ICE_CONTAINER = document.getElementById('ice-container');

// if (!ICE_CONTAINER) {
//   throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
// }

// ReactDOM.render(
//   <HashRouter>{router()}</HashRouter>,

//   ICE_CONTAINER
// );
const clientRender = () => {
  const ICE_CONTAINER = document.getElementById('ice-container');

  if (!ICE_CONTAINER) {
    throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
  }

  ReactDOM.render(
    <HashRouter>{router()}</HashRouter>,

    ICE_CONTAINER
  );
};

const serverRender = (context, options)=> {
  return new Promise(function(resolve,reject){

    return () =>(
      <HashRouter>{router()}</HashRouter>
    )
  });
}

export default EASY_ENV_IS_NODE ? serverRender : clientRender();
