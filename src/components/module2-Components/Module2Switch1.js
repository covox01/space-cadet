import React, { Component, Fragment } from "react";
import Module2Light1 from "./Module2Light1";
import { Back, Elastic, TimelineLite } from "gsap";

class Module2Switch1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
			completedSequence: 0,
			switchComplete: false,
      };
      this.triggerTween = new TimelineLite();
   }
   
   switchRight = () => {
      console.log("switch right activated")
      this.triggerTween
         .to(this.trigger, 0.2, {
            x: 225,
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
   
   switchLeft = () => {
      this.triggerTween
         .to(this.trigger, 0.2, {
            x: 0,
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
         }, "-=.2") 
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
			this.props.handleModule2Switch1();
		} else {
			this.setState({
				completedSequence: 1,
				switchComplete: false,
			});
			this.props.handleModule2Switch1();
		}
	};

	handleClick = () => {
		   this.handleSwitch()
      if (!this.state.animate) {
         this.setState({
            animate: true,
         });
         this.switchRight();
      } else {
         this.setState({
            animate: false,
         });
         this.switchLeft();
      }
	};

	render() {
		return (
			<Fragment>
				<g id="am2-switch-1" onClick={() => this.handleClick()}>
					<path
						fill="#282828"
						d="M634.6,183.7L634.6,183.7c0,13.3-10.9,24.2-24.2,24.2h-374c-13.3,0-24.2-10.9-24.2-24.2l0,0 c0-13.3,10.9-24.2,24.2-24.2h373.8C623.7,159.6,634.6,170.2,634.6,183.7z"
					/>
					<path
                  ref={path => (this.trigger = path)}
                  filter="url(#module2-switch1)"
						fill="#656565"
						d="M398.8,153H219c-6.2,0-11.2,5.1-11.2,11.2v39c0,6.2,5.1,11.2,11.2,11.2h179.8c6.2,0,11.2-5.1,11.2-11.2 v-39C410,158.1,405,153,398.8,153z"
						id="am2-trigger-1"
					/>
				</g>
				<defs>
					<filter id="module2-switch1" x="-2" y="-.8" width="400%" height="300%">
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
				<Module2Light1 switchComplete={this.state.switchComplete}/>
			</Fragment>
      )
   }
}


export default Module2Switch1;
