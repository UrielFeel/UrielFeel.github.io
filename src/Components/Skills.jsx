import React from 'react'
import '../Styles/Skills.css'
import { BsBraces } from 'react-icons/bs'
import { FaDatabase } from 'react-icons/fa'

export default function Skills() {
  return (
    <section className='container skills' id='#skills'>
      <h2>Skills</h2>
      <div className='skillsWrap'>

        <div className='skillCard'>

          <h3> <BsBraces /> Front-End</h3>

          <ul>
            <li> <img src='./icons/html.svg' alt='*' /> Html</li>
            <li> <img src='./icons/css.svg' alt='*' /> CSS</li>
            <li> <img src='./icons/js.svg' alt='*' />JavaScript</li>
            <li> <img src='./icons/reactjs.svg' alt='*' />React</li>
            <li> <img src='./icons/redux.svg' alt='*' /> Redux</li>
            <li> <img src='./icons/styled.svg' alt='*' /> Styled</li>

          </ul>

        </div>

        <div className='skillCard'>
          <h3> <FaDatabase /> Back-End</h3>
          <ul>
            <li> <img src='./icons/node.svg' alt='*' /> Node</li>
            <li> <img src='./icons/express.svg' alt='*' /> Express</li>
            <li> <img src='./icons/mongo.svg' alt='*' /> MongoDB</li>
            <li> <img src='./icons/java.svg' alt='*' /> Java</li>
            <li> <img src='./icons/sql.svg' alt='*' /> SQL</li>
            <li> <img src='./icons/git.svg' alt='*' /> Git</li>

          </ul>
        </div>
      </div>
    </section>
  )
}
