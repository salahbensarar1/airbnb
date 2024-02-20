import React from "react";
import Card from "./Card";
import image1 from "./assets/image1.png"
import wedding_photography from "./assets/wedding_photography.png"
import mountain_bike1 from "./assets/mountain_bike1.png"
import Surfing from "./assets/Surfing.png"

const cardData = [
    { id: 1, image: image1, rating: 5.0, reviews: "(6) •", location: 'USA', title: 'Life Lessons with Katie Zaferes', price: 136 } ,
    { id: 2, image: wedding_photography, rating: 5.0, reviews: "(30) •", location: 'USA', title:'Learn Wedding Photography', price: 125} ,
    { id: 3, image: mountain_bike1, rating: 4.8, reviews: '(2) •', location: 'USA', titile: 'Group Mountain Biking', price: 50 } ,
    { id: 4, image: Surfing, rating: 4.8, reviews: '(2) •', location: 'USA', titile: 'Group Mountain Biking', price: 50 } ,
    { id: 5, image: mountain_bike1, rating: 4.8, reviews: '(2) •', location: 'USA', titile: 'Group Mountain Biking', price: 50 } 
];
export default function CardContainer() {
    return (
        <div className="CardContainer">
            {cardData.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
}