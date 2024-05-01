import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Welcome from '../components/sections/welcome';
import { DataObj1 } from '../components/sections/about/Data';
import Experience from '../components/sections/experience/experience';
//import { DataObj2 } from '../components/sections/projects/Data';
import {TopicWrap} from '../components/sections/welcome/WelcomeElements';

const Pages = () => {

  return (
    <>
    <NavBar />
    <TopicWrap><Welcome /></TopicWrap>
    <TopicWrap><About {...DataObj1}/></TopicWrap>
    <TopicWrap><Experience/></TopicWrap>
    <TopicWrap><Projects /></TopicWrap>
    </>
  )
}

export default Pages