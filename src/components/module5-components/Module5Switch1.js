import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite, Power3 } from "gsap";
import Module5Switch3 from "./Module5Switch3"

class Module5Switch1 extends Component {
	constructor() {
		super();
		this.state = {
			animate: false,
         switch1Complete: false,
         switch3Complete: false,
         module5Switch3Complete: false
      };
      this.triggerTween = new TimelineLite();
   }
   
   switchOn = () => {
      this.triggerTween
         .to([this.filter, this.innerCircle], 0.5, {
            attr: { stdDeviation: 10},
            fill: "#efda73",
            ease: Power3.easeOut,
         })
   }

   switchOff = () => {
      this.triggerTween
         .to([this.filter, this.innerCircle], 0.5, {
            attr: { stdDeviation: 10},
            fill: "#808080",
            ease: Power3.easeOut
         })
   }

   // handleSwitch1 = () => {
   //    if (this.state.switch3Complete) {
   //       this.setState({
   //          switch1Complete: true,
   //       })
   //    }  else if (this.state.switch1Complete ) {
   //       this.setState({
   //          switch1Complete: true
   //       })
   //    }
   // } 

	// handleSwitch3 = () => {
	// 	if (this.state.switch3Complete) {
	// 		this.setState({
	// 			switch3Complete: true,
	// 		});
   //       this.props.handleModule5Switch3();
	// 	} else if (!this.state.switchComplete) {
	// 		this.setState({
	// 			switch3Complete: false,
	// 		});
   //       this.props.handleModule5Switch3();;
	// 	}
	// };

	handleClick = () => {
      if (this.state.switch3Complete && !this.state.switch1Complete){
         this.switchOn();
         this.setState({
            switch1Complete: true
         })
         this.props.handleModule5Switch1();
      } 
   };
   
   handleModule5Switch3 = () => {
      if (!this.state.switch3Complete) {
            this.setState({
            switch3Complete: true
         })
         this.props.handleModule5Switch3();
         } else if (this.state.switch3Complete){
            this.setState({
               switch3Complete: false
         })
         this.props.handleModule5Switch3();
      }
   }

	render() {
		return (
			<Fragment>
				<g id="am5-switch-1" onClick={() => this.handleClick()}>
					<circle
						ref={circle => (this.outerCircle = circle)}
						fill="#282828"
						cx="140.2"
						cy="149.3"
						r="70.5"
					/>
					<path
                  ref={path => (this.innerCircle = path)}
                  filter="url(#module5-switch1)"
						id="am5-trigger-1"
						fill="gray"
						d="M140.2,109.3c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40 S162.3,109.3,140.2,109.3z"
					/>
				</g>
            <defs>
					<filter id="module5-switch1" x="-.7" y="-.5" width="200%" height="200%">
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
            <Module5Switch3 handleModule5Switch3={this.handleModule5Switch3}/>
			</Fragment>
		);
	}
}

export default Module5Switch1;