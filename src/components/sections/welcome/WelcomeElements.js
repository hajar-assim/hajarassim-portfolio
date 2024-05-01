import styled from "styled-components";
import {device} from './../../../devices';


export const WelcomeContainer = styled.div`
    justify-content: center;
    align-items: left;
    flex-direction: column;
    display:flex;
    padding-top: 300px;

    @media ${device.iPhone12P} {
        max-width: 390px;
        margin-right:10px;
        margin-left:20px;
        align-items: center;
        justify-content: center;
    }
`
export const Img = styled.img`
    width: 400px;
    height:300px;
    padding: 30px;
    padding-left: 190px;
`

export const TitleW = styled.h1`
    font-size: 5rem;
    color: #9f8bcf;
    margin-top: -100px;

`

export const SubtitleW = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    color: #9E9E9E;
    margin-top: -50px;
`

export const TopicWrap = styled.div`
    padding-left: 300px;
    padding-bottom: 200px;
`