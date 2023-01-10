import { Component, onMount } from 'solid-js';
import { Container, Navbar } from 'solid-bootstrap'
import styles from './App.module.css';
const DeskNavbar: Component = () => {

  onMount(()=> {
    const workBtn = document.getElementById('workBtn') as HTMLElement
    const superDot = document.getElementById('superDot') as HTMLElement
    const aboutBtn = document.getElementById('aboutBtn')
    const resumeBtn = document.getElementById('resumeBtn')

    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = workBtn.getBoundingClientRect()
    const offset   = elemRect.top - bodyRect.top;
    superDot.style.marginLeft= `${elemRect.left}`

    console.log()
    console.log(superDot.style.marginLeft)
    console.log(elemRect.left.toString(), offset)
  })

  const setDot = ()=> {
    console.log('set dot')
  }

  const resetDot = ()=> {
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
            <button class='btn' id="workBtn" onmouseover={()=> setDot()} onmouseout={() => resetDot()}>Work</button>
            <button class='btn' id="aboutBtn" onmouseover={()=> setDot()}  onmouseout={() => resetDot()}>About</button>
            <button class='btn' id="resumeBtn" onmouseover={()=> setDot()}  onmouseout={() => resetDot()}>Resume</button>
          </div>
        }
      </Container>
      <span id="superDot" class={styles.dot}></span>  
    </Navbar>
  )
}

export default DeskNavbar;