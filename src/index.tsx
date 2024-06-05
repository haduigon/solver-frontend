/* eslint-disable */
import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import { Root } from './Root';
import React from 'react';
import './global.scss'
// import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
  <Root />
</React.StrictMode>
)
