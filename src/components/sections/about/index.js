import React from 'react'
import { AboutContainer, TitleA, TextA, Img, InnerContainer, TextContainer, TextB } from './AboutElements'
import image from '../../../images/aboutme.svg';

const About = ({about, internship, skills }) => {
  return (
    <>
    <AboutContainer>
      <TitleA>// about me</TitleA>
      <InnerContainer>
      <Img src={image}/>
        <TextContainer>
           <TextA>{about}</TextA>
           <TextA>{skills}</TextA>
           <TextB>{internship}</TextB>
        </TextContainer>
      </InnerContainer>
    </AboutContainer>
    </>
  )
}

export default About