import React from 'react'
import { AboutContainer, TitleA, TextA, Img, InnerContainer, TextContainer, TextB } from './AboutElements'
import image from '../../../images/jelly.jpeg';

const About = ({about, internship, skills }) => {
  return (
    <>
    <AboutContainer>
      <TitleA>/ about me</TitleA>
      <InnerContainer>
        <TextContainer>
           <TextA>{about}</TextA>
           <TextA>{skills}</TextA>
           <TextB>{internship}</TextB>
        </TextContainer>
      <Img><img src={image} alt='jellyfish' width='400px' height='300px'></img></Img>
      </InnerContainer>
    </AboutContainer>
    </>
  )
}

export default About