import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.min.css';
import { createHashHistory } from 'history';
import Application from './Application';
require('./styles/base.scss');

const history = createHashHistory();

ReactDOM.render(
  <Application history={history} />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();