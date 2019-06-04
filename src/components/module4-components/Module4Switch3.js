import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap"

class Module4Switch3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: false,
            completedSequence: 0,
            switchComplete: false
        };
        this.triggerTween = new TimelineLite();
    }

    render() {
        return(
            <g id="am4-switch-3">
                <path
                    fill="#282828"
                    d="M580,528.1L580,528.1c-26.5,0-48-21.5-48-48V353.8c0-26.5,21.5-48,48-48l0,0c26.5,0,48,21.5,48,48V480 C628,506.6,606.5,528.1,580,528.1z"
                />
                <path
                    fill="gray"
                    d="M580.3,326.2c-18.9,0-34.3,15.3-34.3,34.3c0,18.9,15.3,34.3,34.3,34.3s34.3-15.3,34.3-34.3 C614.5,341.5,599.2,326.2,580.3,326.2z"
                    id="am4-trigger-3"
                />
            </g>
        )
    }
}

export default Module4Switch3;