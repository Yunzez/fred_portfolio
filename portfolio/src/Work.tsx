import { Component } from 'solid-js';
import {A} from "@solidjs/router";
import WorkCard, { WorkCardProps } from './WorkCard.js';
import * as workData from './data.json'
const Work: Component = () => {

  console.log(workData['data'])
  for (let i of workData['data']) {
    console.log(i)
  }
  return (
    <>
      <div class='workIntro'>
        <div class="infoSection w-75">
          <small class='text-muted mb-1'>Hi There, I'm Fred</small>
          <h1>Software Engineer Extraordinaire And Smart With Hardware Too!</h1>
          <div class="d-flex flex-column">
            <span class='mt-2'>Front-end Engineer @ <A href='https://opentug.com/' style={{"color": "#b318f0", "text-decoration":'none'}}>OpenTug</A></span>
            <span>Masters Student @ <A href="https://engineering.nyu.edu/" style={{"color": "#b318f0", "text-decoration":'none'}}>NYU Tandon</A> School of Engineering</span>
          </div>
        </div>

      </div>
      <div class="d-flex flex-wrap justify-content-around container">
        {
          workData['data'].map((work) => {
            return (
              <WorkCard
                name={work.name}
                imgSrc={work.imgSrc}
                gitUrl={work.gitUrl}
                siteUrl={work.siteUrl}
                skillSet={work.skillSet}
                timeElapse={work.timeElapse}
                description={work.description}
              />
            )
          })
        }
      </div>
    </>

  )
}

export default Work;