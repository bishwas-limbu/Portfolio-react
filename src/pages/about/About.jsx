import React from 'react'
import './style.scss';
import { useNav } from '../../hooks/useNav';

export default function About() {
  const aboutRef = useNav('About');
  return (
    <div>
      <section ref = {aboutRef} id= 'aboutSection' className='aboutSection'>
            <h1>About</h1>
      </section>
    </div>
  )
}