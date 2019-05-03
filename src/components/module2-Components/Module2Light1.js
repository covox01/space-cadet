import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite } from "gsap";

class Module2Light1 extends Component {
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
         .to([this.light, this.filter], 0.2, {
            attr: { stdDeviation: 30 },
            ease: Elastic.easeOut,
         }).delay(.1)
         .to([this.light, this.filter], 0.2, {
            fill: "#efda73",
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
         .to([this.light, this.filter], 0.2, {
            fill: "#808080",
            attr: { stdDeviation: 0 },
            ease: Back.easeInOut
		   })
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
			<Fragment>
				<path
					filter="url(#module2Light1)"
					ref={path => (this.light = path)}
					fill="gray"
					d="M750,163.3c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4 S761.2,163.3,750,163.3z"
					id="am2-light-1"
				/>
				<defs>
					<filter id="module2Light1" x="-1.8" y="-1.8" width="600%" height="600%">
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

export default Module2Light1;
