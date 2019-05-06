import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite } from "gsap";

class Module5Switch4 extends Component {
	constructor() {
		super();
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
			this.props.handleModule5Switch4();
		} else {
			this.setState({
				completedSequence: 1,
				switchComplete: false,
			});
			this.props.handleModule5Switch4();
		}
	};

   
   switchDown = () => {
      this.triggerTween
         .to(this.trigger, 0.2, {
            y: -70,
            fill: "#efda73",
            ease: Back.easeInOut,
         })
         .to(this.filter, 0.2, {
            attr: { stdDeviation: 10 },
            ease: Elastic.easeOut
         }, "-=.1")
         .to([this.trigger, this.filter], 0.2, {
            attr: { stdDeviation: 13 },
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
            attr: { stdDeviation: 10 },
            ease: Elastic.easeOut,
         }, "-=.1")
         .to([this.filter, this.trigger], 0.2, {
            attr: { stdDeviation: 13 },
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
		return (
			<Fragment>
				<g id="am5-switch-3" onClick={() => this.handleClick()}>
					<path
						fill="#303030"
						d="M795.7,219.6h-43c-2.8,0-5-2.2-5-5V84c0-2.8,2.2-5,5-5h43c2.8,0,5,2.2,5,5v130.6 C800.7,217.4,798.5,219.6,795.7,219.6z"
					/>
					<path
                  ref={path => (this.trigger = path)}
                  filter="url(#module5-switch4)"
						fill="gray"
						d="M747.7,214.7v-62.1c0-2.7,2.2-5,5-5h43.1c2.7,0,5,2.2,5,5v62.1c0,2.7-2.2,5-5,5h-43.1 C749.9,219.6,747.7,217.4,747.7,214.7z"
						id="am5-trigger-1_1_"
					/>
				</g>
				<defs>
					<filter id="module5-switch4" x="-.8" y="-.8" width="300%" height="300%">
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

export default Module5Switch4;
