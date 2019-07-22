import React, { Component, Fragment } from "react";
import { timingSafeEqual } from "crypto";

class Module7Switch1 extends Component {
    constructor(){
        super(props);
        this.state ={
            animate: false,
            completedSequence: 0,
            switchComplete: false,
        }
    }

    switchOn = () => {
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
            this.switchOn();
        }
    }
    render() {
        return(
            <path
               onClick={this.handleClick}
               ref={path => (this.trigger = path)}
               filter="url(#module7-switch1)"
               id="am7-trigger-1"
               fill="gray"
               d="M152.4,95.9c-31.4,0-57,25.6-57,57s25.6,57,57,57s57-25.6,57-57S183.9,95.9,152.4,95.9z"
            />
            <defs>
               <filter id="module7-switch1" x="-2" y="-.8" width="400%" height="300%">
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
        )
    }
}

export default Module7Switch1;