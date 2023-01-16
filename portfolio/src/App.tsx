import type { Component } from 'solid-js';
import { Route, Routes } from "@solidjs/router";
import logo from './logo.svg';
import styles from './App.module.css';
import DeskkNavbar from './DeskNavbar.js';
import Work from './Work.js';
import About from './About.js';
export const App: Component = () => {
  return (
    <>
      <DeskkNavbar />
      <Routes>
        <Route path="/work"  element={<Work/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/resume" element={
        <div class="mt-5">This site was made with Solid</div>
        } />
      </Routes>
    </>

  );
};

export default App;
