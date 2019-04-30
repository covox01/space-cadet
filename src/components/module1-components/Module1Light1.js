
import React, { Component } from "react";

class Module1Light1 extends Component {
	constructor() {
		super();
		this.state = {
         switchComplete: false
      };
   }

   componentDidUpdate(prevProps, prevState){
      if (this.state.switchComplete === false && this.props.switchComplete === true) {
         this.setState({
            switchComplete: true
         })
      } else if (this.state.switchComplete === true && this.props.switchComplete === false) {
         this.setState({
            switchComplete: false
         })
      } 
   }


	render() {
		return (
         <g 
            id="am1-light-1" 
            switchComplete={this.props.switchComplete} 
            ref={g => (this.handleLight = g)}>
				<path
					id="am1-light-face-1"
					fill="gray"
               d="M275.4,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4 S286.6,428.5,275.4,428.5z"
               pointerEvents="none"
				/>
			</g>
		);
	}
}
export default Module1Light1;
