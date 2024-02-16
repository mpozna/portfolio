import '../styles/skills.css'
import CSharpLogo from '../images/csharp.png'
import PythonLogo from '../images/python.png'
import JavaScript from '../images/javascript.svg'
import TypeScript from '../images/typescript.png'
import React from '../images/react.png'
import SQL from '../images/sql.png'
import CSS from '../images/css.png'
import HTML from '../images/html.svg'

const skills = [
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  React,
  CSharpLogo,
  PythonLogo,
  SQL,
]

const TechnicalSkills = () => {
  return (
    <div id='skills-container'>
      <p id='title'>Tech Stack</p>
      <div id='icon-container'>
        {skills.map(x => {
          return (
            <img src={x} id='icon' />
          )
        })}
      </div>
    </div>
  )
}

export default TechnicalSkills