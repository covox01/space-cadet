import React, { Component, Fragment } from "react";
import Module1Light3 from "./Module1Light3"
import { Back, Elastic, TimelineLite}from "gsap";

class Module1Switch3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
			completedSequence: 0,
			switchComplete: false,
		};
		this.triggerTween = new TimelineLite();
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
			this.props.handleModule1Switch3();
		} else {
			this.setState({
				completedSequence: 1,
				switchComplete: false,
			});
			this.props.handleModule1Switch3();
		}
	};

	switchDown = () => {
      this.triggerTween
         .to(this.trigger, 0.2, {
            y: 140,
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
         }, "-=.1");
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
		return (
			<Fragment>
				<g id="am1-switch-3" onClick={() => this.handleClick()}>
					<path
						fill="#282828"
						d="M681.2,391.8L681.2,391.8c-10.9,0-19.7-8.8-19.7-19.7V127c0-10.9,8.8-19.7,19.7-19.7l0,0 c10.9,0,19.7,8.8,19.7,19.7v245C700.9,383,692.1,391.8,681.2,391.8z"
					/>
					<g id="am1-trigger-3">
						<path
                     filter="url(#switch3)"
                     ref={path => (this.trigger = path)}
							id="am1-trigger-face-3"
							fill="#656565"
							d="M701.3,101.7h-40.1c-5.1,0-9.2,4.1-9.2,9.2v138.8c0,5.1,4.1,9.2,9.2,9.2h40.1 c5.1,0,9.2-4.1,9.2-9.2V110.9C710.5,105.8,706.3,101.7,701.3,101.7z"
						/>
					</g>
					<defs>
						<filter id="switch3" x="-2" y="-.8" width="400%" height="300%">
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
				</g>
				<Module1Light3 switchComplete={this.state.switchComplete} />
			</Fragment>
		);
	}
}
export default Module1Switch3;
