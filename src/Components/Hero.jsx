import React from 'react'
import '../Styles/Hero.css'
import { FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id='home' className='hero'>

      <div className='container heroWrap'>

        <img src='./binary.svg' className='heroImg' />

        <div className='heroText'>
          <h1>Hola, soy Uriel.</h1>
          <span>Javascript Fullstack Developer</span>

          <div className='heroBtnGroup'>
            <a href='#contact' className='btn'>Contactame</a>
            <a href='#' className='btn'>  Cv <FiDownload size='1.5rem'/></a>
          </div>

        </div>

      </div>

      <div className='wave' style={{ height: '150px', overflow: 'hidden' }}>
      <svg viewBox='0 0 500 150' preserveAspectRatio='none' style={{ height: '100%', width: '100%' }}><path d='M-3.72,92.26 C150.00,150.00 361.40,-57.73 514.33,99.18 L500.00,150.00 L0.00,150.00 Z' style={{ stroke: 'none', fill: 'var(--light)' }} /></svg>
      </div>

    </section>
  )
}
