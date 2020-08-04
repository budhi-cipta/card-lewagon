import React from 'react'

import Button from '../Button/Button'

import './card.css'

const Card = ({title,title1,text,titleButton1,titleButton2,action1,action2}) => {

    return(
        <div className="wraper">
            <div className="cardSingle">
                <h1>{title}</h1>
                <h1>{title1}</h1>
                <p>{text}</p>
            <div className="wrapbutton">
                <div className="button">
                <Button 
                text={titleButton1}
                primary
                type="button"
                onclick={action1}
                />
                </div>
                <div className="button">
                <Button
                text={titleButton2}
                secondary
                type="button"
                onclick={action2}
                />
                </div>   
            </div> 
            </div>     
        </div>
    )
}

export default Card;