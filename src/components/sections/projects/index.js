import React from 'react';
import { useState } from 'react';
import { AboutContainer, TitleA, CardContainer, IndividualCard, Button} from './ProjectElements';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { FaGithubAlt } from 'react-icons/fa';
import * as Data from './Data'

const Projects = () => {

  const cards = Array.from({length:4}, (x, i) => i);

  function Card(props) {

    const id = props.id;
    const [isOpen, setIsOpen] = useState(false);


    const handleDemo = () => {
      window.open(Data.DataObj2[`demo${id}`]);
    };

    const handleClick = () => {
      window.open("https://github.com/hajar-assim/breakout-recreation");
    };
    
    return (

      <IndividualCard style={{height: isOpen ? 'auto' : '374px'}}>

      <motion.div>


      <img src={Data.DataObj2[`image${id}`]} alt='no img loaded' width='290px' height='290px' className='cardImg'/>

      <p className='p1'>{Data.DataObj2[`title${id}`]}</p>

      <Button onClick={handleDemo}>demo</Button><Button onClick={() => setIsOpen(!isOpen)}>learn more ▾</Button>

      {/* OPENING THE CARD CONTENTS */}

      <AnimatePresence> 
      {isOpen && (
        <>

          <p className='p2'>{Data.DataObj2[`desc${id}`]}</p>

          <p className='p2'>{Data.DataObj2[`skills${id}`]}</p>

          <Button><FaGithubAlt onClick={handleClick} style={{height: '20px'}}/></Button>
          
        
        </>
      )}
      </AnimatePresence>

      </motion.div>
      </IndividualCard>
    );
  }
  


  return (
    <>
    <AboutContainer>

      <TitleA>// side quests </TitleA>
      <LayoutGroup>
      <motion.ul layout >
        <CardContainer>
        {cards.map((card, index) => {
            if (index !== 0) {
              return <Card key={card} id={card} />;
            }
            return null; 
          })}
        </CardContainer>
      </motion.ul>
      </LayoutGroup>
        
    </AboutContainer>
    </>
  )

        }

export default Projects


    // HOVER EFFECTS
    /*
    const onMouseOver = event => {
      const el = event.target;
      el.style.color = "#BDB0DD";
    }
  
    const onMouseOut = event => {
      const el = event.target;
      el.style.color = "#000";
    }
    */