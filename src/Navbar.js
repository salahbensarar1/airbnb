import React from "react";
import logo_Botom_Air from "./assets/logo_Botom_Air.png"
// import logo_Botom_Air from "./assets/logo_Botom_Air.png";
function Navbar(){
    return(
        
        <nav className="Navbar">
            <img src = {logo_Botom_Air} className="logo-air"/>
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



