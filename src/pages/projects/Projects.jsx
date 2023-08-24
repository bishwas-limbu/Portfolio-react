import React from 'react'
import './style.scss';
import { useNav } from '../../hooks/useNav';

export default function Projects() {
  const projectRef = useNav('Projects');
  return (
    <div>
      <section ref = {projectRef} id = 'projectsSection' className='projectSection'>
            <h1>Projects</h1>
      </section>
    </div>
  )
}
