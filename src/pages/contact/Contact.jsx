import React from 'react'
import './style.scss';
import { useNav } from '../../hooks/useNav';

export default function Contact() {
  const contactRef = useNav('Contact')
  return (
    <div>
      <section ref = {contactRef} id = 'contactSection' className='contactSection'>
            <h1>Contact</h1>
      </section>
    </div>
  )
}
