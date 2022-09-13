import React from "react"
import earth from "../images/earth.jpg"

export default function Navbar(){
    return (
        <div className="navDiv">
        <img src={earth} className="navImg" alt ="img"/>
        <h4 className="navH3"> my travel journal</h4>
        </div>
    )
} 