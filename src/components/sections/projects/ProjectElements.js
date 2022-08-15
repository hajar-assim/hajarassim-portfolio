import styled from "styled-components";



// CONTAINERS

export const AboutContainer = styled.div`
   //border: solid pink;
    display: flex;
    margin-top: 170px;
    margin-bottom: 170px;
    text-align: left;
    align-items: left;
    margin-left: 15rem;
    margin-right: 15rem;
    flex-direction: column;
`

export const ProjectContainer = styled.div`
    //border: solid red; //////////////////////
    width: 97%;
    height: 35rem;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
`

export const TextContainer = styled.div`
    //border: solid blue;
    display: flex;
    margin-right: 20px;
    border: solid white; /////////
    border-radius: 10px;
    min-width: 300px;
    min-height: 500px;
    max-height: 300px;
    padding: 20px;
    margin-bottom: 17px;
    flex-direction: column;
`   

export const InnerContainer = styled.div`
    //border: solid purple;
    flex-direction: row;
`

export const CardContainer = styled.div`
    //border: solid cyan;
    width: 900px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const IndividualCard = styled.div`
    //border: solid red;
    background: #DFDFDF;
    border-radius: 20px;
    display: flex;
    cursor: pointer;
    padding: 1.5rem 0rem;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 1rem;
    width: 250px;
`

// TEXT

export const TitleA = styled.h1`
    font-size: 2rem;
    color: #BDB0DD;
`

export const TextA = styled.p`
    color: white;
    font-size: 1.06rem;
    width: auto;
    align-content: justify;
    line-height: 2rem;
    text-align: center;
`

export const TextB = styled.p`
    color: #CBBDDA;
    font-size: 0.93rem;
    font-style: italic;
    width: auto;
    align-content: justify;
    line-height: 1.8rem;
    font-weight: bold;
    text-align: center;
`

export const HeaderP = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    width: auto;
    align-content: justify;
    line-height: 1.8rem;
    font-weight: bold;
    text-align: center;
`




// VISUALS

export const Img = styled.div`
    height: 20rem;
    width: 34rem;
    align-items: center;
`

export const MobileIcon = styled.div`
    cursor: pointer;

`