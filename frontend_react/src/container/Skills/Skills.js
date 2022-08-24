import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

import SkillData from './SkillData';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss' ;
const Skills = () => {
  const [skills, setSkills] = useState(SkillData);
  // const [experience, setExperience] = useState([]);

  return (
    <>
      <h2 className="head-text">Familiar <span>Skills </span></h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
        {skills.map((skill)=>(
          <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration : 0.5}}
          className="app__skills-item app__flex"
          key={skill.name}
          >
            <div className="app__flex" style={{backgroundColor: "#edf2f8"}}>
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}

          </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__primarybg"
  );