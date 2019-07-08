import React, { Component, Fragment } from "react";
import {
  Back,
  TimelineLite,
  TimelineMax,
  Elastic,
  TweenMax,
  Power4
} from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";
import MonitorAnimations from "../module4-components/MonitorAnimations"

class Module4Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      completedSequence: 0,
      switchComplete: false,
      monitorClicked: false
    };
    this.triggerTween = new TimelineLite();
  }

  handleClick = () => {
   console.log("This Works");
   this.morphSVG = MorphSVGPlugin
   this.morphTween = new TimelineMax();
   this.morphSVG.convertToPath("polyline, line")
   this.morphTween
   .to([this.graph1Start], 0.3, {
      morphSVG: this.graph1Mid,
      ease: Elastic.easeInOut,
      opacity: 1,
      stroke: "#a3e8ce",
      visibility: "visible",
      attr: {filter: "url(#monitor-start)"}
   })
   .to([this.graph1Start], 0.3, {
      morphSVG: this.graph1Start,
      ease: Elastic.easeInOut,
      attr: {filter: "url(#monitor-start)"}
   })
   // .to([this.graph1Start], 0.3, {
   //    morphSVG: this.graph1End,
   //    ease: Elastic.easeInOut,
   // })
   // .to([this.graph1Start], 0.3, {
   //    morphSVG: this.graph1Start,
   //    ease: Elastic.easeInOut,
   //    stroke: "#a3e8ce",
   //    attr: {filter: null},
   //    opacity: .5
   // })
  };

  render() {
    return (
      <Fragment>

{/* ----- Animation Mid ----- */}
         <path
            ref={path => (this.graph1Mid = path)}
            id="am4-graph-1-mid"
            fill="none"
            stroke="#a3e8ce"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M29.5,140.8c0,0,22.1-47.4,81.8-47.4s83.4,87,150.8,87c44.5,0,75.3-39.6,75.3-39.6"
         />
{/* ----- Animation End ----- */}
         <path
            ref={path => this.graph1End = path}
            id="am4-graph-1-end"
            fill="none"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M29.5,140.8c0,0,18.7,39.6,77.6,39.6s93.9-87,150.9-87s79.4,47.4,79.4,47.4"
         />
         
         {/* <line
            id="am4-graph-2-1"
            fill="none"
            stroke="#17FFFB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="27"
            y1="66.1"
            x2="341"
            y2="66.1"
         /> */}
         {/* <line
            id="am4-graph-2-2"
            fill="none"
            stroke="#FFE600"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="27"
            y1="140.8"
            x2="341"
            y2="140.8"
         /> */}
         {/* <line
            id="am4-graph-2-3"
            fill="none"
            stroke="#FF3E3E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="27"
            y1="215.5"
            x2="341"
            y2="215.5"
         /> */}
         </Fragment>
    );
  }
}

export default Module4Monitor;
