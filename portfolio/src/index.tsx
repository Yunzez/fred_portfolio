/* @refresh reload */
import './index.css';
import { App } from './App.js';
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";

render(() => (
  <Router>
    <App />
  </Router>

), document.getElementById('root') as HTMLElement);
