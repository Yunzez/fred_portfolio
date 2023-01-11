import { Component } from 'solid-js';
import WorkCard, { WorkCardProps } from './WorkCard';
import * as workData from './data.json'
const Work: Component = () => {

  console.log(workData['data'])
  for (let i of workData['data']) {
    console.log(i)
  }
  return (
    <>
      <div class='workIntro'>
        <div class="infoSection">
          <small class='text-muted'>Hi There, I'm Fred</small>
          <h3>Software Engineer Extraordinaire And Smart With Hardware Too!</h3>
          <p>Front-end Engineer @ OpenTug</p>
          <p>Masters Student @ NYU Tandon School of Engineering</p>
        </div>

      </div>
      <div class="d-flex flex-wrap justify-content-between container">
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