import { Component, ComponentProps } from 'solid-js';
import './workCard.css'

export interface WorkCardProps extends ComponentProps<any> {
  name: string;
  imgSrc: string;
  gitUrl: string;
  siteUrl: string;
  skillSet: string[];
  timeElapse: string;
  description: string;
}


const WorkCard: Component<WorkCardProps> = (props: WorkCardProps) => {
  return (
    <div class='workCard mt-1'>
      <img class="workdCardImg" src={props.imgSrc}></img>
      <div class='d-flex justify-content-between ps-2 pe-2'>
        <div class='d-flex flex-column'>
          <span style={{
            'font-size': 'x-large'
          }}><b>{props.name}</b></span>
          <small class='text-muted'>{props.timeElapse}</small>
        </div>
        <div class='d-flex mt-1 flex-nowrap '>

          {props.skillSet.map((skill) => {
            return (<div><span class='skillBadge'>{skill}</span></div>)
          })}
        </div>
      </div>
      <div class='mt-2 container-fluid'>{props.description}</div>

    </div>
  )
}

export default WorkCard;