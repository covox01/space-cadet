import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap"

class Module4Switch1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: false,
            completedSequence: 0,
            switchComplete: false
        };
        this.triggerTween = new TimelineLite();
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

    switchDown = () => {
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
         }, "-=.1");
   }
   
   switchUp = () => {
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
            <g id="am4-switch-1" onClick={() => this.handleClick()}>
                <path
                    fill="#282828"
                    d="M361.4,489H336c-2.6,0-4.6-2.1-4.6-4.6v-136c0-2.4,2-4.5,4.5-4.5h25.8c2.4,0,4.5,2,4.5,4.5v135.9 C366,486.8,363.9,489,361.4,489z"
                />
                <path
                    ref={path => (this.trigger = path)}
                    filter="url(#module4-switch1)"
                    id="am4-trigger-1"
                    fill="#656565"
                    d="M331.3,345.6v69.6c0,1.4,1.2,2.7,2.7,2.7h29.5c1.4,0,2.7-1.2,2.7-2.7v-69.6 c0-1.4-1.2-2.7-2.7-2.7H334C332.4,343,331.3,344.2,331.3,345.6z"
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
