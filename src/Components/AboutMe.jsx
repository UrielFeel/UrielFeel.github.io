import React from 'react'
import '../Styles/AboutMe.css'

export default function AboutMe() {
  return (
    <section className='container aboutMe' id='aboutMe'>
      <div className='aboutText'>
        <h2>Sobre mi</h2>
        <p>Aprendiendo constantemente tecnologías relacionadas con la programación y el desarrollo web, con ganas de crecer en el mundo IT, actualmente me especializo en el desarrollo Frontend con React, aunque amante del back.
        </p>

      </div>

      <div className='aboutImg' >
        <img src="./img/Uriel-Olmedo.jpg" alt="Uriel Olmedo" className='meImg'/>
      </div>
    </section>
  )
}
