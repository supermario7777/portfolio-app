import React from 'react'
import './index.css'
import { Link } from 'react-scroll'

export default function Section1() {
  return (
    <div className='Section1'>
        <h2>Madiyar Syubebayev</h2>
        <div className='menu'>
            <Link to="section3" smooth={true} duration={500}><a href='#'>About</a></Link>
            <Link to="section4" smooth={true} duration={500}><a href='#'>Experience</a></Link>
            <Link to="section5" smooth={true} duration={500}><a href='#'>Projects</a></Link>
            <Link to="section8" smooth={true} duration={500}><a href='#'>Contacts</a></Link>
        </div>
    </div>
  )
}
