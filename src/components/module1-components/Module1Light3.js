import React, { Component } from "react";

class Module1Light3 extends Component {
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
      } else if (this.state.switchCOmplete === true && this.props.switchComplete === false) {
         this.setState({
            switchComplete: false
         })
      }
   }
	render() {
		return (
			<g id="am1-light-3">
				<path
					id="am1-light-face-3"
					fill="gray"
					d="M681.2,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4 c11.2,0,20.4-9.2,20.4-20.4S692.5,428.5,681.2,428.5z"
				/>
			</g>
		);
	}
}
export default Module1Light3;
