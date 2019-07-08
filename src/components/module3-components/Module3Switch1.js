import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite, Power3, TimelineMax } from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";
import DrawSVGPlugin from "../../../src/DrawSVGPlugin";

class Module3Switch1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
			switchComplete: false,
      };
      this.triggerTween = new TimelineLite();
      this.morphSVG = MorphSVGPlugin;
      this.morphTween = new TimelineMax();
      this.drawSVG = DrawSVGPlugin;
      this.drawTween = new TimelineMax();
   }
   
   switchOn = () => {
    this.triggerTween
       .to([this.filter, this.trigger2], .5, {
          attr: { stdDeviation: 15},
          fill: "#ef1c00",
          ease: Power3.easeOut,
       })
    }
   
    switchOff = () => {
        this.triggerTween
           .to([this.filter, this.innerCircle], .5, {
              attr: { stdDeviation: 0},
              fill: "#808080",
              ease: Power3.easeOut
           })
        }

    handleSwitch = () => {
        if (!this.state.switchComplete) {
            this.setState({
                switchComplete: true,
            });
            // this.props.handleModule3Switch1();
        } else if (this.state.switchComplete) {
            this.setState({
                switchComplete: false,
            });
            this.props.handleModule3Switch1();
        }
    }

	handleClick = () => {
      this.handleSwitch();
      if (!this.state.animate) {
         this.setState({
            animate: true
         })
         this.switchOn();
      } else {
         this.setState({
            animate: false
         })
         this.switchOff()
      }
   }

	render() {
		return (
			<Fragment>
               <g onClick={() => this.handleClick()}>
                  <path
                     ref={path => (this.trigger1 = path)}
                     id="am3-trigger-bg-1"
                     fill="#303030"
                     d="M98.7,5.6c-3.5,0-6.5,3-6.5,6.5v535.7c0,3.5,3,6.5,6.5,6.5h194.1V5.6H98.7z"
                  />
                  <path
                     ref={path => (this.trigger2 = path)}
                     id="am3-trigger-1"
                     fill="gray"
                     d="M190,268.1c-11.2,0-20.3,9.1-20.3,20.3c0,11.2,9.1,20.3,20.3,20.3c11.2,0,20.3-9.1,20.3-20.3	C210.4,277.2,201.2,268.1,190,268.1z"
                  />
               </g>
               <g>
                  <circle
                     fill="#282828"
                     cx="568.9"
                     cy="288.2"
                     r="154.4"
                     id="am3-radar-face"
                  />
                  <path
                        id="am3-radar-outer-ring"
                     fill="gray"
                     d="M568.9,500.5c-117,0-212.2-95.2-212.2-212.2S451.9,76,568.9,76s212.2,95.2,212.2,212.2 S686,500.5,568.9,500.5z M568.9,79.7c-115,0-208.5,93.5-208.5,208.5S454,496.7,568.9,496.7s208.5-93.5,208.5-208.5 S683.9,79.7,568.9,79.7z"
                     id="am3-outer-ring"
                  />
                  <path
                     id="am3-radar-inner-ring"
                     fill="gray"
                     d="M778,285.4H661.2c-1.5-49.7-42.2-89.4-92.2-89.4c-50,0-90.7,39.9-92.2,89.4H359.9	v5.6h116.9c1.5,49.7,42.2,89.4,92.2,89.4c50,0,90.7-39.9,92.2-89.4H778V285.4z M568.9,201.6c46.9,0,85.1,37.3,86.6,83.8H482.3	C483.8,238.9,522.1,201.6,568.9,201.6z M568.9,375c-46.9,0-85.1-37.3-86.6-83.8h173.2C654.1,337.5,615.8,375,568.9,375z"
                  />
                  <circle 
                     id="am3-radar-light" 
                     fill="gray" 
                     cx="782.5" 
                     cy="289" 
                     r="17.5" />
                  </g>
            </Fragment>
      )
   }
}


export default Module3Switch1;