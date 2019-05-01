import React, { Component } from "react";
import TweenMax from "gsap";

class Module1Light2 extends Component {
	constructor() {
		super();
		this.state = {
			lightOn: false,
		};
		this.light = null;
		this.lightTween = null;
	}

	// This function changes the state and animates the light
	handleLightOn = () => {
		this.setState({
			lightOn: true,
		});
		this.lightTween = TweenMax.to(this.light, 0.5, {
			fill: "#f9e815",
		});
		this.filterTween = TweenMax.to(this.filter, 0.5, {
			attr: { stdDeviation: 15 },
		});
	};

	// This function changes the state and animates the light
	handleLightOff = () => {
		this.setState({
			lightOn: false,
		});
		this.lightTween = TweenMax.to(this.light, 0.5, {
			fill: "#808080",
		});
		this.filterTween = TweenMax.to(this.filter, 0.5, {
			attr: { stdDeviation: 0 },
		});
	};

	// Detects if Module Switch is true and will fire the function to animate accordingly
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
			<g id="am1-light-2">
				<path
					filter="url(#light2)"
					ref={g => (this.light = g)}
					id="am1-light-face-2"
					fill="gray"
					d="M478.2,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4 S489.5,428.5,478.2,428.5z"
				/>
				<defs>
					<filter id="light2" x="-.8" y="-.8" width="300%" height="300%">
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
export default Module1Light2;
