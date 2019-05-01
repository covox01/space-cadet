import React, { Component } from "react";
import { Back, Elastic, TimelineLite } from "gsap";
import "../../App.css";

class Module1Light1 extends Component {
	constructor() {
		super();
		this.state = {
			lightOn: false,
		};
	}

	handleLightOn = () => {
		this.setState({
			lightOn: true,
      });
      const triggerTween = new TimelineLite()
      triggerTween
         .to([this.light, this.filter], 0.5, {
            attr: { stdDeviation: 30 },
            ease: Elastic.easeOut,
         }).delay(.45)
         .to([this.light, this.filter], 0.5, {
            fill: "#f9e815",
            attr: { stdDeviation: 15 },
            ease: Elastic.easeOut,
         }, "-=3");
	};

	handleLightOff = () => {
		this.setState({
			lightOn: false,
      })
      const triggerTween = new TimelineLite();
      triggerTween
         .to([this.light, this.filter], 0.5, {
            fill: "#808080",
            attr: { stdDeviation: 0 },
            ease: Back.easeInOut
		   })
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.lightOn === false && this.props.switchComplete === true) {
			this.handleLightOn();
		} else if (
			this.state.lightOn === true &&
			this.props.switchComplete === false
		) {
			this.handleLightOff();
		}
	}

	render() {
		return (
			<g id="am1-light-1">
				<path
					filter="url(#light1)"
					id="am1-light-face-1"
					fill="grey"
					d="M275.4,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4 S286.6,428.5,275.4,428.5z"
					pointerEvents="none"
					ref={path => (this.light = path)}
				/>
				<defs>
					<filter id="light1" x="-1.8" y="-1.8" width="600%" height="600%">
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
		);
	}
}
export default Module1Light1;
