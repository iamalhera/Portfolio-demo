import React from 'react'
import './Navbar.scss' ;
import { images } from '../../constants/index' ;
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div>
        <img src={images.logo} alt="logo" />
        <ul>
          {['home','about','work','skills','contact'].map((item)=>(
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    )
}

export default Navbar