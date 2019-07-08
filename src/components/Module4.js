import React, { Component, Fragment } from "react";
import Module4Switch1 from "../components/module4-components/Module4Switch1.js";
import Module4Switch2 from "../components/module4-components/Module4Switch2.js";
import Module4Switch3 from "../components/module4-components/Module4Switch3.js";
import Module4Monitor from "../components/module4-components/Module4Monitor.js";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax, Power3 } from "gsap"

class Module4 extends Component {
	constructor(){
		super()
		this.state = {
			switches: [
				{switch1: false}, 
				{switch2: false},
				{switch3: false}
         ],
      }
	}

	handleModule4Switch1 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch1 = this.state.switches[0].switch1;
		if (switch1 === false) {
			const updateSwitch = { id: 1, switch1: true };
			updateSwitchArray.splice(0, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch1 === true) {
			const updateSwitch = { switch1: false };
			updateSwitchArray.splice(0, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray, 
			});
		}
	};

	handleModule4Switch2 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch2 = this.state.switches[1].switch2;
		if (switch2 === false) {
			const updateSwitch = { id: 2, switch2: true };
			updateSwitchArray.splice(1, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch2 === true) {
			const updateSwitch = { switch2: false };
			updateSwitchArray.splice(1, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	handleModule4Switch3 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch3 = this.state.switches[2].switch3;
		if (switch3 === false) {
			const updateSwitch = { id: 3, switch3: true };
			updateSwitchArray.splice(2, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch3 === true) {
			const updateSwitch = { switch3: false };
			updateSwitchArray.splice(2, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	moduleBorderOn = () => {
      const drawTweenOn = new TimelineMax();
		const borderTween = new TimelineLite();
		borderTween
			.to([this.innerBorder, this.outerBorder, this.filter], 0.2, {
				fill: "#a3e8ce",
				attr: { stdDeviation: 15 },
            ease: Back.easeOut,
			})
         .delay(0.1);
	};

	moduleBorderOff = () => {
      const drawTweenOff = new TimelineMax();
		const borderTween = new TimelineLite();
		borderTween
			.to([this.innerBorder, this.outerBorder, this.filter], 0.2, {
				fill: "#808080",
				opacity: 1,
            attr: { stdDeviation: 0 },
            ease: Back.easeOut
         })
	};

	componentDidUpdate() {
		const updateSwitchArray = [...this.state.switches];
		let checkArray = updateSwitchArray
			.reduce((arr, obj) => [...arr, ...Object.values(obj)], [])
			.every(x => x);
		this.props.handleModule4(checkArray);
		if (checkArray === true) {
			this.moduleBorderOn();
		} else {
			this.moduleBorderOff();
		}
	}

	render() {
		return (
         <Fragment>
            <svg 
               id='module4' 
               xmlns='http://www.w3.org/2000/svg' 
               viewBox='0 0 372.1 560.4'>
               <g id='am4-bg'>
                  <path 
                     fill='#3F4040' 
                     d='M369.5,5.8c0-1.7-1.4-3.1-3.1-3.1H5.8c-1.7,0-3.1,1.4-3.1,3.1v548.8c0,1.7,1.4,3.1,3.1,3.1h360.5 c1.7,0,3.1-1.4,3.1-3.1V5.8H369.5z'
                  />
                  <path
                     ref={path => (this.outerBorder = path)}
                     fill='gray' 
                     d='M372.2,5.8c0-3.2-2.6-5.8-5.8-5.8H5.8C2.6,0,0,2.6,0,5.8v548.8c0,3.2,2.6,5.8,5.8,5.8h360.5 c3.2,0,5.8-2.6,5.8-5.8V5.8H372.2z M369.5,554.6c0,1.7-1.4,3.1-3.1,3.1H5.8c-1.7,0-3.1-1.4-3.1-3.1V5.8c0-1.7,1.4-3.1,3.1-3.1 h360.5c1.7,0,3.1,1.4,3.1,3.1v548.8H369.5z'
                  />
               </g>
               <g id="am4-monitor" onClick={() => this.handleClick()}>
                  
                  <path
                     fill="#212121"
                     d="M340.9,39.2c0-2.5-2-4.5-4.5-4.5H31.3c-2.5,0-4.5,2-4.5,4.5V240c0,2.5,2,4.5,4.5,4.5h305.2 c2.5,0,4.5-2,4.5-4.5V39.2H340.9z"
                  />
                  <path
                     ref={path => {this.innerBorder = path}}
                     filter="url(#monitor-start)"
                     id="am4-border-outline"
                     fill="gray"
                     d="M343.6,39.2c0-3.9-3.2-7.1-7.1-7.1H31.3c-3.9,0-7.1,3.2-7.1,7.1V240c0,3.9,3.2,7.1,7.1,7.1h305.2 c3.9,0,7.1-3.2,7.1-7.1V39.2z M340.9,240c0,2.5-2,4.5-4.5,4.5H31.3c-2.5,0-4.5-2-4.5-4.5V39.2c0-2.5,2-4.5,4.5-4.5h305.2 c2.5,0,4.5,2,4.5,4.5V240H340.9z"
                  />
               </g>

               <Module4Switch1 
                  handleModule4Switch1={() => this.handleModule4Switch1()}/>
               <Module4Switch2 
                  handleModule4Switch2={() => this.handleModule4Switch2()}/>
               <Module4Switch3 
                  handleModule4Switch3={() => this.handleModule4Switch3()}/>
            
			<defs>
               <filter id="monitor-start" x="-1" y="-.8" width="500%" height="300%">
                  <feOffset in="SourceGraphic" dx="0" dy="0" />
                  <feGaussianBlur
                     ref={filter => (this.filter1 = filter)}
                     result="blurOut"
                     in="offOut"
                     stdDeviation="20"
                  />
                  <feBlend
                     in="SourceGraphic"
                     in2="blurOut"
                     mode="normal"
                     opacity="1"
                  />
               </filter>
            </defs>
            </svg>
           
         {/* <<<<< Module 4 SVG Stuff <<<<< */}
         </Fragment>
			
		);
	}
}
export default Module4;
