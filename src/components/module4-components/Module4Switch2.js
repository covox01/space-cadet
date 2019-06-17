import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap"

class Module4Switch2 extends Component {
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
            this.props.handleModule4Switch2();
		} else {
			this.setState({
				completedSequence: 2,
				switchComplete: true,
			});
			this.props.handleModule4Switch2();
		} 
	};
    
   switchDown = () => {
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