import React from 'react'
import './style.scss';
import { useNav } from '../../hooks/useNav';

export default function Home() {
  const homeRef = useNav('Home');
  return (
    <div>
      <section  ref = {homeRef} id = 'homeSection' className='homeSection'>
            <h1>Home</h1>
      </section>
    </div>
  )
}
