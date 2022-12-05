import React, {useState} from 'react'
import '../Styles/NavBar.css'
import { HiMenu, HiChip } from 'react-icons/hi'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const handlerLink = () => {
    setOpen(!open)
  }
  return (

    <header className='header'>
      <div className='navBar'>
        <div className='logo'> <HiChip /> UrielO. </div>

        <div className='menuIcon' onClick={handlerLink}><HiMenu />  </div>

        <nav className={`nav ${open ? 'open' : ''}`}>

          <a href='#home' className='navLink' onClick={handlerLink}>Inicio</a>
          <a href='#aboutMe' className='navLink' onClick={handlerLink}>Sobre mi</a>
          <a href='#projects' className='navLink' onClick={handlerLink}>Proyectos</a>
          <a href='#contact' className='navLink' onClick={handlerLink}>Contactame</a>

        </nav>
      </div>

    </header>
  )
}
