import React from "react";
import Airbnb from "./assets/Airbnb.jpeg"
// import logo_Botom_Air from "./assets/logo_Botom_Air.png";
function Navbar(){
    return(
        
        <nav className="Navbar">
            <img src = {Airbnb} className="logo-air" alt="Airbnb home"/>
            <ol className="list">
                <li>
                    Contact
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Login/ Sign up
                </li>
            </ol>
        </nav>
    )
}
export default Navbar;



