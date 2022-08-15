import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Welcome from '../components/sections/welcome';
import { DataObj1 } from '../components/sections/about/Data';
//import { DataObj2 } from '../components/sections/projects/Data';

const Pages = () => {

  return (
    <>
    <NavBar />
    <Welcome />
    <About {...DataObj1}/>
    <Projects />
    </>
  )
}

export default Pages