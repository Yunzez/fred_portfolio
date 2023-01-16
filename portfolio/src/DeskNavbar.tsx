import { Component, onMount } from 'solid-js';
import { Container, Navbar } from 'solid-bootstrap'
import { A } from "@solidjs/router";
import styles from './App.module.css';
import './index.css';
const DeskNavbar: Component = () => {

  onMount(() => {

    const workBtn = document.getElementById('workBtn') as HTMLElement

    workBtn.classList.add('navSelected')
    const superDot = document.getElementById('superDot') as HTMLElement
    const aboutBtn = document.getElementById('aboutBtn')
    const resumeBtn = document.getElementById('resumeBtn')

    for (const currBtn of [workBtn, aboutBtn, resumeBtn]) {
      currBtn?.addEventListener('click', () => setSelected(currBtn))
    }

    const setSelected = (currBtn: HTMLElement) => {
      console.log('set selected')
      if (!currBtn.classList.contains('navSelected')) {
        currBtn.classList.add('navSelected')
        for (const unsetButton of [workBtn, aboutBtn, resumeBtn]) {
          if (unsetButton !== currBtn) {
            unsetButton?.classList.remove('navSelected')
          }
        }
      }
    }
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = workBtn.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top;
    superDot.style.marginLeft = `${elemRect.left}`

    console.log()
    console.log(superDot.style.marginLeft)
    console.log(elemRect.left.toString(), offset)
  })

  const setDot = () => {
    console.log('set dot')
  }

  const resetDot = () => {
    console.log('reset dot')
  }

  return (
    <Navbar class={styles.navBorderColorGrey}>
      <Container>
        <Navbar.Brand href="#" >
          {<div>
            <h4>Fred Zhao</h4>
          </div>
          }
        </Navbar.Brand>
        {
          <div class={`d-flex justify-content-around ${styles.navTabAttribute}`}>
            <A href="/work" class='btn' id="workBtn" onmouseover={() => setDot()} onmouseout={() => resetDot()}>Work</A>
            <A href="/about" class='btn' id="aboutBtn" onmouseover={() => setDot()} onmouseout={() => resetDot()}>About</A>
            <A href="/resume" class='btn' id="resumeBtn" onmouseover={() => setDot()} onmouseout={() => resetDot()}>Resume</A>

            <A href="/work" class='mt-1'>  <img class="btn navImg" src='./imgs/git.png'></img> </A>
            <A href="/work" class='mt-1'> <img class="btn navImg" src='./imgs/linkedin.png'></img> </A>
            <A href="/work"  class='mt-1'> <img class="btn navImg" src='./imgs/email.png'></img> </A>
          </div>


        }
      </Container>

      <span id="superDot" class={styles.dot}></span>
    </Navbar>
  )
}

export default DeskNavbar;