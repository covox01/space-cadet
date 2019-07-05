import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap";
import MorphSVGPlugin from "../../MorphSVGPlugin";

class Module4Switch1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: false,
            completedSequence: 0,
            switchComplete: false,
            visibility: "hidden"
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
            this.props.handleModule4Switch1();
		} else {
			this.setState({
				completedSequence: 2,
				switchComplete: true,
			});
			this.props.handleModule4Switch1();
		} 
    };
    
    
   animationOne = () => {
   this.morphTween
      .kill()
      .to([this.graph1Start], 0.3, {
         morphSVG: this.graph1Mid,
         ease: Elastic.easeInOut,
         opacity: 1,
         stroke: "#efda73",
         attr: {filter: "url(#monitor-start)"}
      })
      .to([this.graph1Start], 0.3, {
         morphSVG: this.graph1Rest,
         ease: Elastic.easeInOut,
         attr: {filter: "url(#monitor-start)"}
      })
   }

   animationTwo = () => {
   this.morphTween
      .kill()
      .to([this.graph1Start], .3, {
         morphSVG: this.graph1Error,
         ease: Elastic.easeInOut,
         opacity: 1,
         stroke: "#ff3e3e",
         visibility: "visible",
         attr: {filter: "url(#monitor-start)"}
      })
      .to([this.graph1Start], .3, {
         morphSVG: this.graph1Rest,
         ease: Elastic.easeInOut,
         attr: {filter: "url(#monitor-start)"}
      })
   }

   



   switchDown = () => {
   this.animationOne()
   this.setState({
      visibility: "visible"
   })
   this.triggerTween
      .to(this.trigger, 0.2, {
         y: 80,
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
      }, "-=.1")

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
        if (!this.state.animate) {
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
    };

    render() {
        return(
        <Fragment>

         {/* ----- Monitor Animation Paths ----- */}

            <path
               ref={path => (this.graph1Start = path)}
               filter="url(#monitor-start)"
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
               d="M29.5,140.8c0,0,22.1-47.4,81.8-47.4s83.4,87,150.8,87c44.5,0,75.3-39.6,75.3-39.6"
            />

            <path 
               ref={path => (this.graph1Rest = path)}
               id="am4-graph-1-rest"
               d='M29.8,139.3l62.5-0.6l187-0.6	h63.1' 
               fill='none' 
               stroke='#40ffff'
               strokeWidth='3' 
               strokeLinecap='round' 
               strokeMiterlimit='10'
               visibility={this.state.visibility}
            />

            {/* False Animation When Switch is Incorrect*/}
            <path
               ref={path => {this.graph1Error = path}}
               id="am4-graph-1-error"
               fill='none' 
               stroke='#ff3e3e' 
               strokeWidth='3' 
               strokeLinecap='round' 
               strokeMiterlimit='10'
               d='M27.7,137.9l62.5-0.6	l8.4,25.7l6.7-45.2l6.1,67l14-96.6l10.6,88.2l16.7-69.2l10,59.7l18.4-96c0,0,26.2,140.7,25.7,142.3c-0.6,1.7,8.9-115,8.9-115	l12.8,68.1l5.6-56.4l14,65.9l24.6-63.6l4.5,24.6h63.1'
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

         {/* ^^^^ Monitor Animation Paths ^^^^ */}

            <g id='am4-switch-1' onClick={() => this.handleClick()}>
            <path 
                fill='#282828' 
                d='M67.2,488.7H41.8c-2.6,0-4.6-2.1-4.6-4.6v-136c0-2.4,2-4.5,4.5-4.5h25.8c2.4,0,4.5,2,4.5,4.5V484 C71.8,486.5,69.7,488.7,67.2,488.7z'
            />
            <path 
                ref={path => (this.trigger = path)}
                filter="url(#module4-switch1)"
                id='am4-trigger-1' 
                fill='#656565' 
                d='M37.1,345.3v69.6c0,1.4,1.2,2.7,2.7,2.7h29.5c1.4,0,2.7-1.2,2.7-2.7v-69.6 c0-1.4-1.2-2.7-2.7-2.7H39.8C38.2,342.7,37.1,343.9,37.1,345.3z'
            />
            </g>
            <defs>
                <filter id="module4-switch1" x="-1" y="-.8" width="500%" height="300%">
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

export default Module4Switch1;
