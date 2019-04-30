import React, { Component } from "react";

class Module1Light2 extends Component {
	constructor() {
		super();
		this.state = {
         switchComplete: false
      };
   }
   
   componentDidUpdate(){
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
			<g id="am1-light-2">
				<path
					id="am1-light-face-2"
					fill="gray"
					d="M478.2,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4 S489.5,428.5,478.2,428.5z"
				/>
			</g>
		);
	}
}
export default Module1Light2;
