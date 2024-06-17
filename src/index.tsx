/* eslint-disable */
import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import { Root } from './Root';
import { Provider } from 'react-redux';
import { store } from './app/store'
import './global.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
)
