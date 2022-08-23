import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
const abouts = [
  { title: 'Frontend Developer', description: 'I am a frontend developer with a passion for building beautiful and functional web applications', imgURL: images.about01 },
  { title: 'Web Developer', description: 'I have a good understanding of web development and can develop web apps', imgURL: images.about02 },
  { title: 'React Developer', description: 'I can build React Apps', imgURL: images.about03 }
]

const About = () => {
  
  return (
    <div id="about" className='app__about'>
      <h2 className='head-text about__description'>
        I know that<span> Good Apps </span><br />means<span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(About, 'about');