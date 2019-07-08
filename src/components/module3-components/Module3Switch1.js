import React, { Component, Fragment} from  "react"
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax, Power3 } from "gsap"


class Module3Switch1 extends Component{
    constructor(){
        super()
        this.state = {
            switch: true
        }
    } 
    render(){
        return(
            <Fragment>
                <path
                  id="am3-trigger-1"
                  fill="#303030"
                  d="M98.7,5.6c-3.5,0-6.5,3-6.5,6.5v535.7c0,3.5,3,6.5,6.5,6.5h194.1V5.6H98.7z"
                />
                <path
                  id="am3-trigger-1"
                  fill="gray"
                  d="M190,268.1c-11.2,0-20.3,9.1-20.3,20.3c0,11.2,9.1,20.3,20.3,20.3c11.2,0,20.3-9.1,20.3-20.3	C210.4,277.2,201.2,268.1,190,268.1z"
               />
            </Fragment>
        )
    }
}

export default Module3Switch1;