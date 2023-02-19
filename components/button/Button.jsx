import React from 'react';
import styled from 'styled-components';
import styles from './Button.module.css';

const Wrapper = styled.section`
display:flex;
justify-content: center;
margin-top:20px;
flex-direction: column;
gap:20px`;

const RoundedButton = styled.button`
background:rgb(3, 99, 233);
color:white;
font-family: Helvetica;
border: none;
font-size: 16px;
padding: 13px 20px; 
width: 65%;
border-radius: 30px;
font-weight: bold;
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
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
}
`;

const SquareButton = styled.button`
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
font-weight: bold;
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
&:active{
    background:black;
}
&:hover{
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
`;

const DarkButton = styled.button`
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
        box-shadow: 10px 10px 10px rgba(0, 0, 0.2, 0.5);

    }
  ;`;

const LightButton = styled.button`
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
        box-shadow: 10px 10px 10px rgba(0, 0.4, 0.2, 0.5);
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
