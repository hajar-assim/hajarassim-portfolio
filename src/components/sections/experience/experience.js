import React from 'react'
import { DateCard, SubHeading, Date, ContactContainer, TitleA, TextA, InnerContainer, TextContainer, ExperienceContainer, Job } from './experienceElements'
import { Icon } from '@iconify/react';
import { Img } from './experienceElements';
import image from '../../../images/entrust.svg';

const Experience = () => {
  return (
    <>
    <ContactContainer>
      <TitleA>// experience</TitleA>
      <InnerContainer>
        <ExperienceContainer>
          <DateCard>
          <Date>JAN 2022 — SEP 2023</Date>
          <Img src={image} />
          </DateCard>
          <Job>
            <SubHeading>Full Stack Developer — Entrust</SubHeading>
            <TextContainer>
            Worked as a member of the Verification team, contributing to the Entrust cloud portal by enhancing UI, resolving bugs, and implementing features to streamline verification processes.
            </TextContainer>
            <ExperienceContainer>
              <Icon icon="logos:docker-icon" width="55"/>
              <Icon icon="devicon:spring" width="40" />
              <Icon icon="logos:java" width="30"/>
              <Icon icon="skill-icons:javascript" width="40"/>
              <Icon icon="simple-icons:microsoftsqlserver" color='#A51C1C' width="40"/>
            </ExperienceContainer>
          </Job>
        </ExperienceContainer>
      </InnerContainer>
    </ContactContainer>
    </>
  )
}

export default Experience