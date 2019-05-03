import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite } from "gsap";

class Module2Light2 extends Component {
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
		const triggerTween = new TimelineLite();
		triggerTween
			.to([this.light, this.filter], 0.2, {
				attr: { stdDeviation: 30 },
				ease: Elastic.easeOut,
			})
			.delay(0.1)
			.to(
				[this.light, this.filter],
				0.2,
				{
					fill: "#ef1c00",
					attr: { stdDeviation: 15 },
					ease: Elastic.easeOut,
				},
				"-=3"
			);
	};

	handleLightOff = () => {
		this.setState({
			lightOn: false,
		});
		const triggerTween = new TimelineLite();
		triggerTween.to([this.light, this.filter], 0.2, {
			fill: "#808080",
			attr: { stdDeviation: 0 },
			ease: Back.easeInOut,
		});
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
			<Fragment>
				<g id="am2-light-2">
               <circle 
                  ref={circle => (this.light = circle)}
                  filter="url(#module2-light2)"
                  fill="gray" 
                  cx="750" 
                  cy="384.9" 
                  r="18.2" />
				</g>
				<defs>
					<filter id="module2-light2" x="-1.8" y="-1.8" width="600%" height="600%">
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

export default Module2Light2;
