import React from 'react'
import ProjectCard from './ProjectCard'
import '../Styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Videogames ',
      description: 'Catalogo de videojuegos usando API de RAWG.io, desarrollada con React para el front, Redux para el manejo de estados, NodeJs para el back y PostgreSQL para persistencia de datos.  \nIncluye funciones de búsquedas, filtrados, ordenamientos, paginado y creacion.',
      img: '/img/VideoGames.png',
      url: '',
      repo: 'https://github.com/UrielFeel/game-over'

    },
    {
      title: 'El ahorcado',
      description: 'Juego del ahorcado creado como desafío del programa Oracle Next Education.',

      img: '/img/hangman.png',
      url: 'https://urielfeel.github.io/Hangman-Game/',
      repo: 'https://github.com/UrielFeel/Hangman-Game'

    },
    {
      title: 'Calculadora',
      description: 'Aplicacion de calculadora basica programada con vanilla javascript y css.',
      img: '/img/calculator.png',
      url: 'https://urielfeel.github.io/Calculator/',
      repo: 'https://github.com/UrielFeel/Calculator'

    }
  ]
  return (
    <section className='container projects' id='projects'>
      <h2>Proyectos</h2>
      <div className='cardsContainer'>

        {
          projects.map(p => (
            <ProjectCard 
              key={p.title} 
              title={p.title} 
              description={p.description} 
              img={p.img} 
              url={p.url} 
              repo={p.repo}               
            />
          ))
        }
      </div>
    </section>
  )
}