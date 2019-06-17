import React, { Component, Fragment } from "react";
import {
  Back,
  TimelineLite,
  TimelineMax,
  Elastic,
  TweenMax,
} from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";

class Module4Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      completedSequence: 0,
      switchComplete: false
    };
    this.triggerTween = new TimelineLite();
  }

  handleClick = () => {
    console.log("This Works");
    this.morphTween = new TimelineMax();
    this.morphTween
      .to([this.morphing], 0.5, {
         morphSVG : {shape:this.morphing,shapeIndex: [0]}
      })
  };

  render() {
    return (
      <Fragment>
         <g id="am4-monitor" onClick={() => this.handleClick()}>
            <path
               fill="#212121"
               d="M340.9,39.2c0-2.5-2-4.5-4.5-4.5H31.3c-2.5,0-4.5,2-4.5,4.5V240c0,2.5,2,4.5,4.5,4.5h305.2 c2.5,0,4.5-2,4.5-4.5V39.2H340.9z"
            />
            <path
               fill="gray"
               d="M343.6,39.2c0-3.9-3.2-7.1-7.1-7.1H31.3c-3.9,0-7.1,3.2-7.1,7.1V240c0,3.9,3.2,7.1,7.1,7.1h305.2 c3.9,0,7.1-3.2,7.1-7.1V39.2z M340.9,240c0,2.5-2,4.5-4.5,4.5H31.3c-2.5,0-4.5-2-4.5-4.5V39.2c0-2.5,2-4.5,4.5-4.5h305.2 c2.5,0,4.5,2,4.5,4.5V240H340.9z"
            />
         </g>
         <polyline
            ref={polyline => (this.morphing = polyline)}
            id="am4-graph-1-start"
            fill="none"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="29.5,140.8 107.1,140.8 253.5,140.8 337.4,140.8"
         />
         <path
            id="am4-graph-1-mid"
            fill="none"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M29.5,140.8c0,0,22.1-47.4,81.8-47.4s83.4,87,150.8,87c44.5,0,75.3-39.6,75.3-39.6"
         />
         <path
            id="am4-graph-1-end"
            fill="none"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M29.5,140.8c0,0,18.7,39.6,77.6,39.6s93.9-87,150.9-87s79.4,47.4,79.4,47.4"
         />
         <line
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
         />
         <line
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
         />
         <line
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
         />
         </Fragment>
    );
  }
}

export default Module4Monitor;
