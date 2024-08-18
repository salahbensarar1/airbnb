import React from "react";
import Star from "./assets/Star.png"


export default function Card({ image, rating, reviews, location, title, price }){
    return(
        <div className="Card">
            <img src={image} alt="Product 1" className="Image" />
            <div className="Card-status">
                <img src={Star} alt="Star Icon" className="Card--star" />
                <span>{rating}</span>
                <span className="gray">{reviews} </span>
                <span className="gray">{location}</span>
            </div>
            <div className="Card-description"><p>{title}</p>
            <p><span className="bold">from {price}$</span> / person</p>
            </div>
        </div>
    )
}
