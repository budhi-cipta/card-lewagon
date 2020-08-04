import React from 'react'
import styled, {css} from 'styled-components'


const ButtonCard = styled.button`
        padding: 15px 30px;
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 14px rgba(126,87,88,.1), 0 3px 6px rgba(0,0,0,.08);
        text-transform: capitalize;
        font-weight: 700;

        ${props => props.secondary && css`
            background-color:#fff;
            color: #fd1015;
        `}
        ${props => props.primary && css`
            background-color:#fd1015;
            color: #fff;
        `}

`



const Button = ({text,primary,secondary,type,onclick}) => {
    return(
        <div>
            <ButtonCard
            primary={primary}
            secondary={secondary}
            type={type}
            onclick={onclick}
            >{text}
            </ButtonCard>
        </div>
    )
}


export default Button;