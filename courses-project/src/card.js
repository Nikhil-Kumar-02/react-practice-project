import { useState } from "react";

function Card({id , title , description , image}){

let subString = `${description.substring(0 , 61)}....`;

const [newDesc , setDesc] = useState(subString);

function clickHandler(){
    if(newDesc.length > 66)
        setDesc(subString);
    else    
        setDesc(description);
}
    return(
        <div className="CardWrapper">
            <div>
                <img className="image" src={image.url} alt={image.alt}/>
            </div>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="description" onClick={clickHandler}>
                <p>{newDesc}</p>
            </div>
        </div>
    );
}

export default Card;