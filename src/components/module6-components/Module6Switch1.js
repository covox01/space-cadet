import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite, Power3 } from "gsap";

class Module6Switch1 extends Component {
	constructor(props) {
      super(props)
      this.state = {
         animate: false,
         completedSequence: 1,
         switchCompleted: false
      }
      this.triggerTween = new TimelineLite();
   }
   
   handleSwitch = () => {
      if (this.state.completedSequence === 0) {
         this.setState({
            completedSequence: 1,
         });
      } else if (this.state.CompletedSequence === 1) {
         this.setState({
            completedSequence: 2,
            switchComplete: true
         })
         this.props.handleModule6Switch1();
      } else {
         this.setState({
            completedSequence: 1,
            switchComplete: false
         })
         this.props.handleModule6Switch1();
      }
   }

   switchDown = () => {
      this.triggerTween
         .to(this.trigger, 0.2, {
            y: 0,
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
            y: -205,
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
            animate: true,
         });
         this.switchUp();
      } else {
         this.setState({
            animate: false
         })
         this.switchDown();
      }
   }

	render() {
		return (
			<Fragment>
				<g id="am6-switch-1" onClick={() => this.handleClick()}>
					<path
						fill="#282828"
						d="M367.6,448.5L367.6,448.5c32.9,0,59.6-26.7,59.6-59.6V171.1c0-32.9-26.7-59.6-59.6-59.6l0,0 c-32.9,0-59.6,26.7-59.6,59.6v217.9C307.8,421.8,334.5,448.5,367.6,448.5z"
					/>
					<path
						ref={path => {
							this.trigger = path
                  }}
                  filter="url(#module6-switch1)"
						fill="#666"
						d="M367.6,333.7L367.6,333.7c-26.7,0-48.4,21.7-48.4,48.4v3.3c0,26.7,21.7,48.4,48.4,48.4l0,0 c26.7,0,48.4-21.7,48.4-48.4v-3.3C416,355.3,394.3,333.7,367.6,333.7z"
						id="am6-trigger-1_1_"
					/>
				</g>
				<defs>
					<filter id="module6-switch1" x="-2" y="-.8" width="400%" height="300%">
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
		);
	}
}

export default Module6Switch1


