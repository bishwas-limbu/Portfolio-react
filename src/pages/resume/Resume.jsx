import React from 'react'
import './style.scss';
import { useNav } from '../../hooks/useNav';

export default function Resume() {
  const resumeRef = useNav('Resume');
  return (
    <div>
      <section  ref = {resumeRef} id = 'resumeSection' className='resumeSection'>
            <h1>Resume</h1>
      </section>
    </div>
  )
}
