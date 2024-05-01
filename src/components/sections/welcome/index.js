import React from 'react';
import { WelcomeContainer, TitleW, SubtitleW, Img} from './WelcomeElements';
import image from '../../../images/welcome_image.svg';


const Welcome = () => {
  return (
    <><WelcomeContainer>
      <TitleW>Hajar Assim</TitleW>
      <SubtitleW>A software engineering student at Carleton University</SubtitleW>
      <Img src = {image}></Img>
    </WelcomeContainer>
    </>
  )
}

export default Welcome