import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax , Power3, Power2 } from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";
import { Ease } from "gsap/TweenLite";
import DrawSVGPlugin from "../../../src/DrawSVGPlugin";

class Module4Switch3 extends Component {
   constructor(props){
      super(props);
      this.state = {
         animate: false,
         completedSequence: 0,
         switchComplete: false
      };
      this.triggerTween = new TimelineLite();
      this.morphSVG = MorphSVGPlugin;
      this.morphTween = new TimelineMax();
      this.drawSVG = DrawSVGPlugin;
      this.drawTween = new TimelineMax();
   }

   handleSwitch = () => {
		if (this.state.completedSequence === 0) {
			this.setState({
				completedSequence: 1,
			});
		} else if (this.state.completedSequence === 1) {
			this.setState({
				completedSequence: 2,
				switchComplete: true,
			});
			this.props.handleModule4Switch3();
		} else {
			this.setState({
				completedSequence: 1,
				switchComplete: false,
			});
			this.props.handleModule4Switch3();
		}
   };
   
   animateOne = () => {
      const drawTweenOn = new TimelineMax();
   // ----- Morph Tween

      this.morphTween
         .kill()
         .to([this.graph1Start], .2, {
            morphSVG: this.graph1Mid,
            ease: Power3.easeInOut,
            stroke: "#efda73",
            attr: {filter: "url(#monitor-start"} 
         })
         .to([this.graph1Start], .2, {
            morphSVG: this.graph1Error, 
            ease: Power2.easeInOut
         })
         .to([this.graph1Start], .2, {
            morphSVG: this.graph1Rest, 
            ease: Power2.easeInOut,
            stroke: "#ff3e3e"
         })

   // ----- Draw Tween
      drawTweenOn
         .kill()
         .to([this.graph1], .5, {
            drawSVG: "0%",
            stroke: "grey" 
         }, .01)
         .to([this.graph2], .5, {
            drawSVG: "0%",
            stroke: "grey"
         }, .1)
         .to([this.graph3], .5, {
            drawSVG: "0%",
            stroke: "grey"
         }, .1)
   }

   animateTwo = () => {
      const drawTweenOff = new TimelineMax()
      this.morphTween
         .kill()
         .to([this.graph1Start], .2, {
            morphSVG: this.graph1End,
            ease: Power3.easeInOut,
            stroke: "#efda73",
            attr: {filter: "url(#monitor-start"} 
         })
         .to([this.graph1Start], .2, {
            morphSVG: this.graph1Mid, 
            ease: Power2.easeInOut
         })
         .to([this.graph1Start], .2, {
            morphSVG: this.graph1Rest, 
            ease: Power2.easeInOut,
            stroke: "#a3e8ce"
         })
      
      drawTweenOff
         // .kill()
         .to([this.graph1], .5, {
            drawSVG: "100%",
            stroke: "#17FFFB"
         }, .2)
         .to([this.graph2], .5, {
            drawSVG: "100%",
            stroke: "#efda73"
         }, .2)
         .to([this.graph3], .5, {
            drawSVG: "100%",
            stroke: "#FF3E3E"
         }, .2)
   }

   switchDown = () => {
      this.animateOne()
      this.triggerTween
         .to(this.trigger, 0.2, {
            y: 115,
            fill: "#efda73",
            ease: Back.easeInOut,
         })
         .to(this.filter, 0.2, {
            attr: { stdDeviation: 15 },
            ease: Elastic.easeOut
         }, "-=.1")
         .to([this.trigger, this.filter], 0.2, {
            attr: { stdDeviation: 20 },
            fill: "#efda73",
            ease: Elastic.easeOut,
         }, "-=.1");
   }

   switchUp = () => {
      this.animateTwo()
      this.triggerTween
         .to(this.trigger, 0.2, {
            y: 0,
            fill: "#9cd3bd",
            ease: Back.easeInOut,
         })
         .to(this.filter, 0.2, {
            attr: { stdDeviation: 15 },
            ease: Elastic.easeOut,
         }, "-=.1")
         .to([this.filter, this.trigger], 0.2, {
            attr: { stdDeviation: 20 },
            ease: Elastic.easeOut,
            fill: "#a3e8ce"
         }, "-=.2");
   }

   handleClick = () => {
      this.handleSwitch();
      if(!this.state.animate) {
         this.setState({
            animate: true
         })
         this.switchDown();
      } else {
         this.setState({
            animate: false
         })
         this.switchUp();
      }
   }

   render() {
      return(
         <Fragment>

      {/* >>>>> Monitor Animation Paths >>>>> */}

               <path
                  ref={path => (this.graph1Start = path)}
                  id="am4-graph-1-start"
                  fill="none"
                  stroke="gray"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  visibility="visible"
                  opacity="1"
                  d="M29.5,140.8 107.1,140.8 253.5,140.8 337.4,140.8"
               />
               <path
                  ref={path => (this.graph1Mid = path)}
                  id="am4-graph-1-mid"
                  fill="none"
                  stroke="#a3e8ce"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  opacity="1"
                  d="M29.5,140.8c0,0,22.1-47.4,81.8-47.4s83.4,87,150.8,87c44.5,0,75.3-39.6,75.3-39.6"
               />

               <path 
                  ref={path => (this.graph1Rest = path)}
                  id="am4-graph-1-rest"   
                  fill='none' 
                  stroke='#40ffff'
                  strokeWidth='3' 
                  strokeLinecap='round' 
                  strokeMiterlimit='10'
                  opacity="1"
                  d="M29.8,139.3l62.5-0.6l187-0.6
                  h63.1" 
               />

               <path 
                  ref={path => (this.graph1Rest = path)}
                  id="am4-graph-1-rest"   
                  fill='none' 
                  stroke='#40ffff'
                  strokeWidth='3' 
                  strokeLinecap='round' 
                  strokeMiterlimit='10'
                  opacity="1"
                  d="M29.8,139.3l62.5-0.6l187-0.6
                  h63.1" 
               />

               <path
                  ref={path => this.graph1End = path}
                  filter="url(#monitor-start)"
                  id="am4-graph-1-end"
                  fill="none"
                  stroke="gray"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  d="M29.5,140.8c0,0,18.7,39.6,77.6,39.6s93.9-87,150.9-87s79.4,47.4,79.4,47.4"
               />
         {/* >>>>>> False Animation When Switch is Incorrect >>>>> */}

               <path
                  ref={path => {this.graph1Error = path}}
                  id="am4-graph-1-error"
                  fill='none' 
                  stroke='#ff3e3e' 
                  strokeWidth='3' 
                  strokeLinecap='round' 
                  strokeMiterlimit='10'
                  d='M28.6,140.4	c0,0,28.2-3.3,35.8-2.6c11.6,1.1,6.6,23.5,20,25.8c13.4,2.2,4.8-30,19.8-30s8.9,45.2,22.3,41.9s2.8-68.7,17.3-68.7	c23.4,0,5.6,83.7,26.2,84.8s11.2-103.8,27.3-102.7c16.2,1.1,10,79.8,23.4,78.1c13.4-1.7,7.2-56.1,18.4-55.8	c11.2,0.3,7.4,70.9,22.8,67.6c10-2.1,5.7-65.9,15.7-65.4c9.6,0.5,5.8,20.9,19,24.4c13.1,3.5,42.1,0,42.1,0'
               />
               
         {/* >>>>>> False Animation When Switch is Incorrect >>>>> */}

               <line
                  ref={line => (this.graph1 = line)}
                  id="am4-graph-2-1"
                  fill="none"
                  stroke="grey"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="27"
                  y1="66.1"
                  x2="341"
                  y2="66.1"
                  // visibility={this.state.visibility}
               />
               <line
                  ref={line => (this.graph2 = line)}
                  id="am4-graph-2-2"
                  fill="none"
                  stroke="grey"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="27"
                  y1="140.8"
                  x2="341"
                  y2="140.8"
                  // visibility={this.state.visibility}
               />
               <line
                  ref={line => (this.graph3 = line)}
                  id="am4-graph-2-3"
                  fill="none"
                  stroke="grey"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="27"
                  y1="215.5"
                  x2="341"
                  y2="215.5"
                  // visibility={this.state.visibility}
               />
            
   {/* <<<<< Monitor Animation Paths <<<<< */}

            <g id='am4-switch-3' onClick={() => this.handleClick()}>
               <path 
                  fill='#282828' 
                  d='M285.8,527.8L285.8,527.8c-26.5,0-48-21.5-48-48V353.5c0-26.5,21.5-48,48-48l0,0c26.5,0,48,21.5,48,48 v126.2C333.8,506.3,312.3,527.8,285.8,527.8z'
               />
               <path 
                  ref={path => (this.trigger = path)}
                  filter="url(#module4-switch3)"
                  fill='gray' 
                  d='M286.1,325.9c-18.9,0-34.3,15.3-34.3,34.3c0,18.9,15.3,34.3,34.3,34.3s34.3-15.3,34.3-34.3 C320.3,341.2,305,325.9,286.1,325.9z'
                  id='am4-trigger-3' 
               />
            </g>
            <defs>
               <filter id="module4-switch3" x="-1" y="-.8" width="500%" height="300%">
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
            </defs>
         </Fragment>
      )
   }
}

export default Module4Switch3;