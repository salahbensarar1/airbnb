import React from "react";
import photo_grid from "./assets/photo_grid.png"

function Hero() {
    return(
        <section className="Hero">
            <img src ={photo_grid} alt="a grid " />
            <h1 className="Hero-header">Online Experiences</h1>
             <p className="hero--text"> Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>

        </section>
    )
}
export default Hero;