import React from "react"
import location from "../images/location.jpg"

export default function Main(props){
    return(
        <div className="mainDiv1">
            <img src={props.img} alt="img"/>
            <div className="mainDiv2">
                <section className="mainSec1">
                    <img src={location} alt="img"/>
                    <h5> {props.country}</h5>
                    <a href="https://google.com"> View on Google Maps</a>
                </section>
                <section className="mainSec2">
                    <h1>{props.placeName}</h1>
                </section>
                <section className="mainSec3">
                    <h4>{props.date}</h4>
                </section>
                <section className="mainSec4">
                    <h5>{props.details}</h5>
                </section>
            </div>
        </div>
    )
}