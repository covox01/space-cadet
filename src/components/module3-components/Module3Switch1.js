import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite, Power3, TimelineMax, TweenMax } from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";
import DrawSVGPlugin from "../../../src/DrawSVGPlugin";
import { Ease, Power2 } from "gsap/TweenLite";

class Module3Switch1 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         animate: false,
         sequence1: false,
         sequence2: false,
      };
      this.confirm = new TimelineMax();
      this.triggerTween = new TimelineLite();
      this.radarCircleTween = new TimelineLite();
      this.morphSVG = MorphSVGPlugin;
      this.morphTween = new TimelineMax();
      this.drawSVG = DrawSVGPlugin;
      this.drawTween = new TimelineMax();
   }
   
   sequence1 = () => {
      this.radarCircleTween
         .to([this.radarCircle], .5, { 
            x: -215
         })
         .to([this.radarCircle, this.filter2], .5, {
            attr: { stdDeviation: 15},
            fill: "#f9e815",
         }, "-=.4")
         .to([this.innerCircle, this.filter3], .5, {
            attr: { stdDeviation: 15},
            fill: "#a3e8ce"
         }, "-=.4")
         .to([this.innerCircle], .5, {
            transformOrigin: "(150% 50%)",
            rotation: -90
          }, "-=.4")
   }

   sequenceOne = () => {
      if (!this.state.sequence2) {
         this.triggerTween
            .to([this.filter, this.trigger2], .5, {
               attr: { stdDeviation: 15},
               fill: "#ef1c00",
               ease: Power3.easeOut,
         })
         this.sequence1()
      }
    
    }
   
    sequenceTwo = () => {

        this.triggerTween
           .to([this.filter, this.innerCircle], 1, {
              transformOrigin: "(150% 50%)",
              rotation: -180,
              fill: "#efda73",
              ease: Power3.easeOut
           }, "sync")

           .to([this.trigger2], .3, {
               fill: "#efda73"
            }, "sync-=.3")

           .to([this.filter4, this.outerCircle], .3, {
              attr: { stdDeviation: 15},
              fill: "#efda73"
           }, "sync-=.3")

           .to([this.radarCircle], .3, {
              fill: "#efda73"
           }, "sync-=.3")
           
           .to([this.outerCircle], .3, {
              fill: "#a3e8ce"
           }, "-=.2")

           .to([this.radarCircle], .3, {
              fill: "#ef1c00"
           }, "-=.2")
      }

   confirmSwitch = () => {
      this.confirm
         .to([this.trigger1], .3, {
            fill: "#282828",
            ease: Power2.easeInOut
         })
         .to([this.trigger1], .3, {
            fill: "#303030",
            ease: Power2.easeInOut
      })
   }

    handleClick = () => {
        if (!this.state.sequence1) {
            this.setState({
                sequence1: true
            });
            this.confirmSwitch()
            this.sequenceOne();
            this.props.handleModule3Switch1();
        } else if (this.state.sequence1) {
            this.setState({
                sequence2: true
            });
            this.confirmSwitch()
            this.sequenceTwo()
            this.props.handleModule3Switch1();
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
                     filter="url(#module3-switch1)"
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
                     ref={path => (this.outerCircle = path)}
                     filter="url(#outerCircleFilter)"
                     id="am3-radar-outer-ring"
                     fill="gray"
                     d="M568.9,500.5c-117,0-212.2-95.2-212.2-212.2S451.9,76,568.9,76s212.2,95.2,212.2,212.2 S686,500.5,568.9,500.5z M568.9,79.7c-115,0-208.5,93.5-208.5,208.5S454,496.7,568.9,496.7s208.5-93.5,208.5-208.5 S683.9,79.7,568.9,79.7z"
                     id="am3-outer-ring"
                  />
                  <path
                     ref={path => (this.innerCircle = path)}
                     filter="url(#innerCircleFilter)"
                     id="am3-radar-inner-ring"
                     fill="gray"
                     d="M778,285.4H661.2c-1.5-49.7-42.2-89.4-92.2-89.4c-50,0-90.7,39.9-92.2,89.4H359.9	v5.6h116.9c1.5,49.7,42.2,89.4,92.2,89.4c50,0,90.7-39.9,92.2-89.4H778V285.4z M568.9,201.6c46.9,0,85.1,37.3,86.6,83.8H482.3	C483.8,238.9,522.1,201.6,568.9,201.6z M568.9,375c-46.9,0-85.1-37.3-86.6-83.8h173.2C654.1,337.5,615.8,375,568.9,375z"
                  />
                  <circle
                     ref={circle => (this.radarCircle = circle)}
                     filter="url(#radarCircleFilter)"
                     id="am3-radar-light" 
                     fill="gray" 
                     cx="782.5" 
                     cy="289" 
                     r="17.5" />
                  </g>
                  <defs>
                     <filter id="module3-switch1" x="-2" y="-.8" width="400%" height="300%">
                        <feOffset in="SourceGraphic" dx="0" dy="0" />
                        <feGaussianBlur
                           ref={filter => (this.filter = filter)}
                           result="blurOut"
                           in="offOut"
                           stdDeviation="0"
                        />
                        <feBlend
                           in="SourceGraphic"
                           in2="blurOut"
                           mode="normal"
                           opacity="0"
                        />
                     </filter>
                     <filter id="radarCircleFilter" x="-2" y="-.8" width="400%" height="300%">
                        <feOffset in="SourceGraphic" dx="0" dy="0" />
                        <feGaussianBlur
                           ref={filter => (this.filter2 = filter)}
                           result="blurOut"
                           in="offOut"
                           stdDeviation="0"
                        />
                        <feBlend
                           in="SourceGraphic"
                           in2="blurOut"
                           mode="normal"
                           opacity="0"
                        />
                     </filter>
                     <filter id="innerCircleFilter" x="-2" y="-.8" width="400%" height="300%">
                        <feOffset in="SourceGraphic" dx="0" dy="0" />
                        <feGaussianBlur
                           ref={filter => (this.filter3 = filter)}
                           result="blurOut"
                           in="offOut"
                           stdDeviation="0"
                        />
                        <feBlend
                           in="SourceGraphic"
                           in2="blurOut"
                           mode="normal"
                           opacity="0"
                        />
                     </filter>
                     <filter id="outerCircleFilter" x="-2" y="-.8" width="400%" height="300%">
                        <feOffset in="SourceGraphic" dx="0" dy="0" />
                        <feGaussianBlur
                           ref={filter => (this.filter4 = filter)}
                           result="blurOut"
                           in="offOut"
                           stdDeviation="0"
                        />
                        <feBlend
                           in="SourceGraphic"
                           in2="blurOut"
                           mode="normal"
                           opacity="0"
                        />
                     </filter>
                  </defs>
            </Fragment>
      )
   }
}


export default Module3Switch1;