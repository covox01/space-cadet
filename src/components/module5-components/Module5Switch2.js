import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite, Power3 } from "gsap";

class Module5Switch2 extends Component {
	constructor() {
		super();
		this.state = {
			animate: false,
			switchComplete: false,
      };
      this.triggerTween = new TimelineLite()
   }
   
   switchOn = () => {
      this.triggerTween
         .to([this.filter, this.innerCircle], 1, {
            attr: { stdDeviation: 15},
            fill: "#ef1c00",
            ease: Power3.easeOut,
         })
   }

   switchOff = () => {
      this.triggerTween
         .to([this.filter, this.innerCircle], 1, {
            attr: { stdDeviation: 0},
            fill: "#808080",
            ease: Power3.easeOut
         })
   }

	handleSwitch = () => {
		if (!this.state.switchComplete) {
			this.setState({
				switchComplete: true,
			});
			this.props.handleModule5Switch2();
		} else if (this.state.switchComplete) {
			this.setState({
				switchComplete: true,
			});
			this.props.handleModule5Switch2();
		}
	};

	handleClick = () => {
		this.handleSwitch();
		if (!this.state.animate) {
			this.setState({
				animate: true,
			});
			this.switchOn();
		} else {
			this.setState({
				animate: false,
			});
			this.switchOff();
		}
	};

	render() {
		return (
			<Fragment>
				<g id="am5-switch-2" onClick={() => this.handleClick()}>
               <circle 
                  ref={circle => (this.outerCircle = circle)}
                  fill="#282828" 
                  cx="430" 
                  cy="149.3" 
                  r="70.5" />
					<path
						ref={path => (this.innerCircle = path)}
						filter="url(#module5-switch2)"
						id="am5-trigger-2"
						fill="#4D4D4D"
						d="M430,109.3c-22.1,0-40,17.9-40,40s17.9,40,40,40c22.1,0,40-17.9,40-40 S452.1,109.3,430,109.3z"
					/>
				</g>
				<defs>
					<filter
						id="module5-switch2"
						x="-.7"
						y="-.5"
						width="200%"
						height="200%"
					>
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

export default Module5Switch2;
