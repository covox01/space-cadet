import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";

class Module4Switch2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: false,
            completedSequence: 0,
            switchComplete: false
        };
        this.triggerTween = new TimelineLite();
        this.morphSVG = MorphSVGPlugin
        this.morphTween = new TimelineMax();
        this.morphSVG.convertToPath("polyline, line") 
    }

    handleSwitch = () => {
		if (!this.state.switchComplete) {
			this.setState({
                completedSequence: 1,
                switchComplete: true,
            });
            this.props.handleModule4Switch2();
		} else {
			this.setState({
				completedSequence: 2,
				switchComplete: true,
			});
			this.props.handleModule4Switch2();
		} 
    };
    
   animationOne = () => {
   this.morphTween
      .kill()
      .to([this.graph1Start], 0.3, {
         morphSVG: this.graph1End,
         ease: Elastic.easeInOut,
         opacity: 1,
         stroke: "#efda73",
         attr: {filter: "url(#monitor-start)"}
      })
      .to([this.graph1Start], 0.3, {
         morphSVG: this.graph1Start,
         ease: Elastic.easeInOut,
         stroke: "#a3e8ce",
         attr: {filter: "url(#monitor-start)"}
      })
      .to([this.graph1Start], 0.3, {
         morphSVG: this.graph1Rest,
         ease: Elastic.easeInOut,
         stroke: "#a3e8ce",
         attr: {filter: "url(#monitor-start)"}
      }, "-=.3")
   }

   animationTwo = () => {
      this.morphTween
          .kill()
          .to([this.graph1Start], 0.3, {
              morphSVG: this.graph1Error2,
              ease: Elastic.easeInOut,
              opacity: 1,
              stroke: '#ff3e3e' ,
              attr: {filter: "url(#monitor-start)"}
          })
          .to([this.graph1Start], 0.3, {
              morphSVG: this.graph1Start,
              ease: Elastic.easeInOut,
              stroke: '#ff3e3e' ,
              attr: {filter: "url(#monitor-start)"}
          })
          .to([this.graph1Start], 0.3, {
            morphSVG: this.graph1Rest,
            ease: Elastic.easeInOut,
            stroke: '#ff3e3e' ,
            attr: {filter: "url(#monitor-start)"}
        }, "-=.3")
      }
    
   switchDown = () => {
   this.animationOne() 
   this.triggerTween
      .to(this.trigger, 0.2, {
         y: 115,
         fill: "#ff3e3e",
         ease: Back.easeInOut,
      })
      .to(this.filter, 0.2, {
         attr: { stdDeviation: 15 },
         ease: Elastic.easeOut
      }, "-=.1")
      .to([this.trigger, this.filter], 0.2, {
         attr: { stdDeviation: 20 },
         ease: Elastic.easeOut,
      }, "-=.1");
   }

   switchUp = () => {
   this.animationTwo()
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
               filter="url(#monitor-start)"
               id="am4-graph-1-start"
               fill="none"
               stroke="gray"
               strokeWidth="3"
               strokeLinecap="round"
               strokeMiterlimit="10"
               d="M29.5,140.8 107.1,140.8 253.5,140.8 337.4,140.8"
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
               ref={path => (this.graph1Error2 = path)}
               id="am4-graph-1-error-2"
               fill='none' 
               stroke='#ff3e3e' 
               strokeWidth='3' 
               strokeLinecap='round' 
               strokeMiterlimit='10'
               d="M28.6,140.4 c0,0,32.8,3,40.4,3.7c11.6,1.1,2.2-22.3,15.6-20.1c13.4,2.2,4.5,55.8,19.5,55.8s8.9-40.2,22.3-43.5s2.8,25.7,17.3,25.7 c23.4,0,5.6-55.8,26.2-54.7c20.7,1.1,11.2,56.9,27.3,58c16.2,1.1,10-25.1,23.4-26.8c13.4-1.7,7.2,41,18.4,41.3 c11.2,0.3,7.4-47,22.8-50.2c10-2.1,5.7,33,15.7,33.5c9.6,0.5,5.8-28.8,19-25.3c13.1,3.5,42.1,0,42.1,0"
            />

            <defs>
               <filter id="monitor-start" x="-1" y="-.8" width="500%" height="300%">
                  <feOffset in="SourceGraphic" dx="0" dy="0" />
                  <feGaussianBlur
                     ref={filter => (this.filter1 = filter)}
                     result="blurOut"
                     in="offOut"
                     stdDeviation="20"
                  />
                  <feBlend
                     in="SourceGraphic"
                     in2="blurOut"
                     mode="normal"
                     opacity="1"
                  />
               </filter>
            </defs>

         {/* <<<<< Monitor Animation Paths <<<<< */}

            <g id='am4-switch-2' onClick={() => this.handleClick()}>
               <path 
                  fill='#282828' 
                  d='M159.3,527.8L159.3,527.8c-26.5,0-48-21.5-48-48V353.5c0-26.5,21.5-48,48-48l0,0c26.5,0,48,21.5,48,48 v126.2C207.4,506.3,185.8,527.8,159.3,527.8z'
               />
               <path
                  ref={path => (this.trigger = path)}
                  filter="url(#module4-switch2)"
                  fill='gray' 
                  d='M159.7,325.9c-18.9,0-34.3,15.3-34.3,34.3c0,18.9,15.3,34.3,34.3,34.3s34.3-15.3,34.3-34.3 C194,341.2,178.5,325.9,159.7,325.9z'
                  id='am4-trigger-2' />
            </g>
               <defs>
                  <filter id="module4-switch2" x="-1" y="-.8" width="500%" height="300%">
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

export default Module4Switch2;