import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Blogs.scss';
import BlogData from './BlogData';


const Blogs = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [blogs, setBlogs] = useState(BlogData);
  return (
    <>
      <h2 className='head-text about__description'>
        My <span> Blogs </span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ transition: 0.5, delayChildren: 0.5 }}
        className="app__blogs-write"
      >
        {blogs.map((blog, index) => (
          <div className="app__blogs-item app__flex" key={index}>
            <div className="app__blogs-img app__flex">
              <img src={blog.imgURL} alt={blog.description} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__blogs-hover app__flex"
              >
                <a href={blog.blogLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__blogs-content app__flex">
              <h4 className='bold-text'>{blog.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{blog.description}</p>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Blogs, 'app__blogs'),
  'blogs',
  "app__whitebg"
);