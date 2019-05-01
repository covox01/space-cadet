import React, { Component, Fragment } from "react";
import Module1Light1 from "./Module1Light1";
import Module1Animation from "./Module1Animation";
import { Back, TimelineLite, Elastic } from "gsap";

class Module1Switch1 extends Component {
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
			this.props.handleModule1Switch1();
		} else {
			this.setState({
				completedSequence: 1,
				switchComplete: false,
			});
			this.props.handleModule1Switch1();
		}
	};

	switchDown = () => {
   //   return Module1Animation
      this.triggerTween
         .to(this.trigger, 0.5, {
            y: 140,
            fill: "#a1dbc3",
            ease: Back.easeInOut,
         })
         .to(this.filter, 0.5, {
            attr: { stdDeviation: 15 },
            ease: Elastic.easeOut
         }, "-=.3")
         .to([this.trigger, this.filter], 0.5, {
            attr: { stdDeviation: 20 },
            fill: "#a3e8ce",
            ease: Elastic.easeOut,
         }, "-=.3");
   }
   
   switchUp = () => {
      this.triggerTween
         .to(this.trigger, 0.5, {
            y: 0,
            fill: "#9cd3bd",
            ease: Back.easeInOut,
         })
         .to(this.filter, 0.5, {
            attr: { stdDeviation: 15 },
            ease: Elastic.easeOut,
         }, "-=.3")
         .to([this.filter, this.trigger], 0.5, {
            attr: { stdDeviation: 20 },
            ease: Elastic.easeOut,
            fill: "#a3e8ce"
         }, "-=.3");
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
				<g id="am1-switch-1" onClick={() => this.handleClick()}>
					<path
						fill="#282828"
						d="M275.4,391.8L275.4,391.8c-10.9,  0-19.7-8.8-19.7-19.7V127c0-10.9,8.8-19.7,19.7-19.7l0,0 c10.9,0,19.7,8.8,19.7,19.7v245C295.2,383,286.4,391.8,275.4,391.8z"
					/>
					<g id="am1-trigger-1">
						<path
							ref={g => (this.trigger = g)}
							filter="url(#switch1)"
							rotate="90"
							id="am1-trigger-face-1"
							fill="#656565"
							d="M295.6,101.7h-40.3c-5.1,0-9.2,4.1-9.2,9.2v138.8c0,5.1,4.1,9.2,9.2,9.2h40.3 c5.1,0,9.2-4.1,9.2-9.2V110.9C304.8,105.8,300.7,101.7,295.6,101.7z"
						/>
					</g>
					<defs>
						<filter id="switch1" x="-2" y="-.8" width="400%" height="300%">
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
				<Module1Light1 switchComplete={this.state.switchComplete} />
			</Fragment>
		);
	}
}
export default Module1Switch1;
