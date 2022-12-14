import React from 'react'
import { BsGithub } from 'react-icons/bs'

export default function ProjectCard({ img, title, repo, url, description }) {
  return (
    <div className='card'>
    
      <img src={img} alt={title} className='cardImg'/>
  
      
        
        <h4 className="cardTitle"> {title} </h4>
        <p className="cardDescription"> {description} </p>
        
      
      <div className="cardBtnGroup">
        {url && <a href={url} className='cardBtn' > Demo <img src='./icons/rocket.svg' alt='*' /></a>}
        {repo && <a href={repo} className='cardBtn'> <BsGithub /> </a>}
      </div>
    </div>
  )
}
