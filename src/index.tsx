/* eslint-disable */
import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import { Root } from './Root';
import './global.scss'

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Root />
)
