import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <nav>
      <Link className="navlink" to="/about">About Me</Link>
      
      <Link className="navlink" to="/portfolio">Portfolio</Link>
      
      <Link className="navlink" to="/contact">Contact</Link>
      
      <Link className="navlink" to="/resume">Resume</Link>
      
    </nav>
  )
}
