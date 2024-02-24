import react from "react";
import "./Card.css";
import Button from "./Button"
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import {FaAngellist} from "react-icons/fa";



const Card = (props) =>{


    const backgroundImage = {
        background: `url(${props.backgroundImage}) center top / cover no-repeat`
    };

    return(

        
        <div className="Card">
            <div style={backgroundImage} id="background-image"> </div>
            <img id="profile-picture" src={props.profile_picture} alt="Profile picture of Ahnaf Talukder" />

            <div id="description">
            <h1>{props.name}</h1>
            <div style={{ display: 'flex'}}><h2 > <FaAngellist />{props.pronoun}</h2></div>
            <h4>{props.vibe}</h4>
            <i><p>{props.goal}</p></i>
            <Button as="a" href={"https://www.linkedin.com/feed/"}>View Instagram</Button>
            

            </div>
           
        </div>
        
      
    )
}

export default Card;