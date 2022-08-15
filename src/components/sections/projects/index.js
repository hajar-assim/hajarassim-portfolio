import React from 'react';
import { useState } from 'react';
import { AboutContainer, TitleA, CardContainer, IndividualCard} from './ProjectElements';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { FaGithubAlt, FaGamepad } from 'react-icons/fa';
import * as Data from './Data'
// import image from '../../../images/BO.png'; 


const Projects = () => {

  ///* GENERATING ID VALUES IN ARRAY 
  const cards = Array.from({length:5}, (x, i) => i);

  function Card(props) {

    const id = props.id;
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <motion.div>

      <IndividualCard onClick={() => setIsOpen(!isOpen)} style={{height: isOpen ? '500px' : '300px'}}>

      <motion.div>
      <p>{Data.DataObj2.title1}</p>
      <FaGamepad/>

      {/* OPENING THE CARD CONTENTS */}

      <AnimatePresence>
      {isOpen && (
        <>
          <p className='p2'>{Data.DataObj2.desc1}</p>

          <p>id: {id}</p>
          <FaGithubAlt/>
          
          
          <p className='p2'>{Data.DataObj2.skills1}</p>
        </>
      )}
      </AnimatePresence>

      </motion.div>
      </IndividualCard>
      </motion.div>
    );
  }
  


  return (
    <>
    <AboutContainer>

      <TitleA>/ projects </TitleA>

      <LayoutGroup>
      <motion.ul layout>
        <CardContainer>
        {cards.map((card) => (
          <Card key={card} id={card}/>
        ))}
        </CardContainer>
      </motion.ul>
      </LayoutGroup>
        
    </AboutContainer>
    </>
  )

        }

export default Projects