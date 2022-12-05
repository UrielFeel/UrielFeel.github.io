import React from 'react'
import '../Styles/Contact.css'
import { IoSend } from 'react-icons/io5'
import { BsGithub } from 'react-icons/bs'
import { BiAt } from 'react-icons/bi'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const info = {
  mail: 'uriel.olme@gmail.com',
  github: '/UrielFeel',
  linkedIn: '/UrielO-dev',
  whatsapp: '541138181876'
}

const handlerSubmit = (e)=>{
  e.preventDefault()

  const data = {}

  for (const field of e.target) {
    if(field.value){
      data[field.name]=field.value
    }
  }  

  console.log(data)

  fetch(`https://formsubmit.co/ajax/${info.mail}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      e.target.reset()
    })
    .catch(error => {
      console.log(error)
      alert("Algo salio mal, no se pudo enviar el mensaje :(")
    });
}


export default function Contact() {


  return (

    <section className='contact' id='contact'>

      <h2>Contacto</h2>

      <div className='container contactWrap'>

        <form className='form' onSubmit={handlerSubmit}>

          <div className='formGroup'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' id='name' name='name' required />
          </div>

          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>

          <div className='formGroup'>
            <label htmlFor='asunto'>Asunto</label>
            <input type='text' id='asunto' name='asunto' />
          </div>

          <div className='formGroup'>
            <label htmlFor='mensaje'>Mensaje</label>
            <textarea id='mensaje' name='mensaje' required />
          </div>

          <button className='btn send'> Enviar <IoSend size='1.5rem' /></button>

        </form>


        <div className='contactInfo'>

          <div className='contactCard'>

            <a href={`mailto: ${info.mail}`} target='_blank' rel='noreferrer'>
              <BiAt />
            </a>
            <div className='contactCardInfo'>
              <h3>Email:</h3>
              <a href={`mailto: ${info.mail}`} target='_blank' rel='noreferrer'>{info.mail}</a>

            </div>
          </div>

          <div className='contactCard'>
            <a target='_blank' href={`https://github.com${info.github}`} rel='noreferrer'>
              <BsGithub />
            </a>
            <div className='contactCardInfo'>
              <h3>Github:</h3>
              <a target='_blank' href={`https://github.com${info.github}`} rel='noreferrer'>{`github.com${info.github}`}</a>

            </div>
          </div>

          <div className='contactCard'>
            <a href={`https://www.linkedin.com/in${info.linkedIn}`} target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a>

            <div className='contactCardInfo'>
              <h3>LinkedIn:</h3>
              <a href={`https://www.linkedin.com/in${info.linkedIn}`} target='_blank' rel='noreferrer'>{info.linkedIn}</a>

            </div>
          </div>

          <div className='contactCard'>
            <a href={`https://wa.me/${info.whatsapp}`} target='_blank' rel='noreferrer'>
              <FaWhatsapp />

            </a>
            <div className='contactCardInfo'>
              <h3>Whatsapp:</h3>
              <a href={`https://wa.me/${info.whatsapp}`} target='_blank' rel='noreferrer'>Click aqui</a>

            </div>

          </div>

          <img src="/Calling.svg" alt="" className='contactImg'/>
        </div>
      </div>
    </section>
  )
}
