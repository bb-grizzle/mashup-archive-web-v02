import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import 'scss/default.scss';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
