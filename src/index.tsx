/*
 * @Author: Classical_1956 
 * @Date: 2018-05-07 16:28:57 
 * @Last Modified by:   Classical_1956 
 * @Last Modified time: 2018-05-07 16:28:57 
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
// import 'antd-mobile/dist/antd-mobile.min.css';
import { createHashHistory } from 'history';
import Application from './Application';
import './styles/base.scss';
import { PageRouter } from './stores';

const history = createHashHistory();
PageRouter.init(history);

ReactDOM.render(
  <Provider history={history}>
    <Application history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();