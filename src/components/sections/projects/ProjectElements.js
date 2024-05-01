import styled from "styled-components";
import {device} from './../../../devices';


// CONTAINERS

export const AboutContainer = styled.div`
   //border: solid pink;
    text-align: left;
    align-items: left;

    @media ${device.iPhone12P} {
        max-width: 390px;
        margin-right:10px;
        margin-left:10px;
    }
`

export const ProjectContainer = styled.div`
    //border: solid red; //////////////////////
    width: 97%;
    height: 35rem;
    overflow-x: auto;

    @media ${device.iPhone12P} {
        max-width: 390px;
    }
`

export const TextContainer = styled.div`
    //border: solid blue;
    border: solid white; /////////
    border-radius: 10px;
    min-width: 300px;
    min-height: 500px;
    max-height: 300px;
    padding: 0px;
    margin-bottom: 17px;
`   

export const InnerContainer = styled.div`
    //border: solid purple;
    flex-direction: row;
`

export const CardContainer = styled.div`
    //border: solid cyan;
    width: 1200px;
    display:flex;
    flex-wrap: wrap;

    @media ${device.iPhone12P} {
        flex-direction: column;
        max-width: 300px;
    }
`

export const IndividualCard = styled.div`
    //border: solid red;
    background: #2C2C2C;
    border-radius: 20px;
    padding: 0rem 0rem;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 1rem;
    width: 300px;
    padding: 20px;
`

// TEXT

export const TitleA = styled.h1`
    font-size: 2rem;
    color: #9f8bcf;
`

export const TextA = styled.p`
    color: blue;
    font-size: 1.06rem;
    width: auto;
    align-content: justify;
    line-height: 2rem;
    text-align: center;
`

export const TextB = styled.p`
    color: blue;
    font-size: 0.93rem;
    font-style: italic;
    width: auto;
    align-content: justify;
    line-height: 1.8rem;
    font-weight: bold;
    text-align: center;
`

export const HeaderP = styled.h1`
    color: #9f8bcf;
    font-size: 1.1rem;
    width: auto;
    align-content: justify;
    line-height: 1.8rem;
    font-weight: bold;
    text-align: center;
`


// VISUALS
export const MobileIcon = styled.div`
    cursor: pointer;
`

export const Button = styled.button`
    width: auto;
    height: 20px;
    border-radius: 8px;
    padding-top:5px;
    padding-right:10px;
    padding-left:10px;
    padding-bottom: 23px;
    color: #9f8bcf;
    font-size: 15px;
    background-color: #191919;
    border-width: 0px;
    margin: 4px;
    align-items: center;
    text-align: center;
    cursor:pointer;

    &:hover {
        opacity: 0.7;
    }
`