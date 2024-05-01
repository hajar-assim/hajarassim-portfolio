import styled from "styled-components";
import {device} from '../../../devices';

export const ContactContainer = styled.div`
    display: flex;
    text-align: left;
    align-items: left;

    flex-direction: column;

    @media ${device.iPhone12P} {
        max-width: 390px;
        margin-right:10px;
        margin-left:10px;
    }
`
export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 60px;
    margin-right: 190px;
`

export const TitleA = styled.h1`
    font-size: 2rem;
    color: #9f8bcf;
`

// export const TextA = styled.p`
//     color: #9E9E9E;
//     font-size: 1.06rem;
//     width: auto;
//     align-content: justify;
//     line-height: 2rem;
// `

export const ExperienceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    gap: 20px;
`

export const Img = styled.img`
    width: 100px;
    height:100px;
`

export const Job = styled.div`
    border-left: 3px solid #9f8bcf;
    padding-left: 20px;
    padding-bottom: 12px;
`

export const DateCard = styled.div`
    padding-left: 20px;
    padding-bottom: 12px;
    text-align: center;
`

export const SubHeading = styled.h2`
    font-size: 1.4rem;
    color: #9f8bcf;
`

export const TextContainer = styled.div`
    color: #9E9E9E;
    align-content: justify;
    line-height: 1.8rem;
    font-weight: bold;
    width: 700px;
    margin-bottom: 20px;
`   

export const Date = styled.div`
    margin: 12px;
    margin-top: 19px;
    padding: 4px;
    height: fit-content;
    border-radius: 6px;
    border: 1px solid #2C2C2C;
    background-color: #9f8bcf;
    color: #191919;
    font-size: small;
    font-weight: bolder;
    //font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`