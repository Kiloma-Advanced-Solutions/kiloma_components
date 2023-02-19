import React from 'react';
import styled from 'styled-components';
import styles from './Button.module.css';

const Wrapper = styled.section`
display:flex;
justify-content: center;
margin-top:20px;
flex-direction: column;
gap:20px`;

const RoundedButton = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
background:rgb(3, 99, 233);
color:white;
font-family: Helvetica;
border: none;
font-size: 16px;
padding: 13px 20px; 
width: 65%;
border-radius: 30px;
text-align:center;


@media only screen and (min-width : 1024px){
    background:rgb(3, 99, 233);
    width: 15%;
    cursor: pointer;
}
@media only screen and (min-width : 1920px) {
    width: 11%;
    cursor: pointer;
}

&:hover{
    box-shadow: 3px 3px 3px rgba(0, 0.1, 0.1, 0.3);
}
&:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

const SquareButton =styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
background:rgb(3, 99, 233);
color:white;
font-family: Helvetica;
border: 1px solid #333; 
padding: 13px 20px; 
border-radius: 5px;
text-align: center;
text-decoration: none;
font-size: 20px; 
cursor: pointer;
width: 65%;

@media only screen and (min-width : 1024px){
    background:rgb(3, 99, 233);
    width: 15%;
    cursor: pointer;
}
@media only screen and (min-width : 1920px) {
    width: 11%;
    cursor: pointer;
}

&:hover{
    box-shadow: 3px 3px 3px rgba(0, 0.1, 0.1, 0.3);
}
&:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

const DarkButton = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
    background: #333;
    color: #fff; 
    padding: 12px;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    width:65%;
    font-family: Helvetica;
    
    @media only screen and (min-width : 1024px){
        width: 15%;
        cursor: pointer;
    }
    @media only screen and (min-width : 1920px) {
        width: 11%;
        cursor: pointer;
    }
    &:hover{
        box-shadow: 3px 3px 3px rgba(0, 0.1, 0.1, 0.4);
    }
    &:disabled {
        opacity: 0.75;
        cursor: not-allowed;
      }
  ;`;

const LightButton = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
    width: 65%;
    background-color: #fff;
    color: #333; 
    border: 1px solid #333; 
    padding: 10px 20px; 
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px; 
    cursor: pointer;
    font-family: Helvetica;
    }
    @media only screen and (min-width : 1024px){
        width: 15%;
        cursor: pointer;
    }
    @media only screen and (min-width : 1920px) {
        width: 11%;
        cursor: pointer;
    }
    &:hover{
        box-shadow: 3px 3px 3px rgba(0, 0.1, 0.1, 0.1);
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    ;`;

function ButtonComponents() {
  return (
    <Wrapper>
      <RoundedButton> Rounded Button </RoundedButton>
      <SquareButton>Square Button</SquareButton>
      <DarkButton>Dark Button</DarkButton>
      <LightButton> Light Button</LightButton>
    </Wrapper>
  );
}
export default ButtonComponents;
