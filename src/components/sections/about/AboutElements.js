import styled from "styled-components";
import {device} from './../../../devices';


export const AboutContainer = styled.div`
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

    @media ${device.iPhone12P} {
        max-width: 390px;
        flex-direction: column;
        margin-left:20px;
    }
`

export const TitleA = styled.h1`
    font-size: 2rem;
    color: #9f8bcf;
`

export const TextA = styled.p`
    color: #9E9E9E;
    align-content: justify;
    line-height: 2rem;
    margin-top: -8px;
`

export const Img = styled.img`
    width: 400px;
    height:300px;
    margin-right: 20px;

    @media ${device.iPhone12P} {
        width: 300px;
        height: 200px;
        margin-bottom: 18px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    font-size: 1.14rem;
`   

export const TextB = styled.p`
    color: #9f8bcf;
    margin-top: -5px;
    align-content: justify;
    line-height: 1.8rem;
    font-weight: bold;
`