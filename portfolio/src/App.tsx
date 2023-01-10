import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import DeskkNavbar from './DeskNavbar';
const App: Component = () => {
  return (
    <>
      <DeskkNavbar/>
      <div class={styles.App}>

      </div>
    </>

  );
};

export default App;
