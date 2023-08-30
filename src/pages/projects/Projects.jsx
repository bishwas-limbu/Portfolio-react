import React from 'react'
import './style.scss';
import { useNav } from '../../hooks/useNav';

export default function Projects() {
  const projectRef = useNav('Projects');
  return (
    <div>
      <section ref = {projectRef} id = 'projectsSection' className='projectSection'>
      <div className='projectSection__container'>
        <h1>Project</h1>
        </div>
      </section>
    </div>
  )
}
