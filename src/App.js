import React from "react"
import Main from "./project/Main.js"
import Navbar from "./project/Navbar.js"
import Data from "./Data.js"
import "./project/style.css"



export default function App(){
  const varFc = Data.map( (item) => {
        return < Main 
                img = {item.coverImg}
                country = {item.country}
                placeName = {item.placeName}
                date = {item.date}
                details = {item.details}
               />
  })

  return(
    <div className="appDiv1">
        <Navbar />
        <div className="appDiv2">
            {varFc}
        </div>
    </div>
  )
}
