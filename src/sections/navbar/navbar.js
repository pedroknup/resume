import React from 'react';
import './navbar.scss';
import { Link } from 'react-scroll';

export function NavBarComponent(props) {
  return (
    <div className='navbar'>
      <Link
        className='navbar-item '
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
        <div className={`navbar-item__divider ${props.currentPage === 0 ? 'selected' : ''}`} />
      </Link>
      <Link activeClass='selected' to='technicalSkills' spy={true} smooth={true} offset={-70} duration={500}>
        <div className='navbar-item'>
          Technical Skills
          <div className={`navbar-item__divider ${props.currentPage === 1 ? 'selected' : ''}`} />
        </div>
      </Link>
      <Link activeClass='active' to='education' spy={true} smooth={true} offset={-70} duration={500}>
        <div className='navbar-item'>
          Education
          <div className={`navbar-item__divider ${props.currentPage === 3 ? 'selected' : ''}`} />
        </div>
      </Link>
      <Link activeClass='active' to='workExperiences' spy={true} smooth={true} offset={-70} duration={500}>
        <div className='navbar-item'>
          Work Experience
          <div className={`navbar-item__divider ${props.currentPage === 4 ? 'selected' : ''}`} />
        </div>
      </Link>
      <Link activeClass='active' to='languages' spy={true} smooth={true} offset={-70} duration={500}>
        <div className='navbar-item'>
          Languages
          <div className={`navbar-item__divider ${props.currentPage === 5 ? 'selected' : ''}`} />
        </div>
      </Link>
    </div>
  );
}
