import React from 'react'
import css from './Description.module.css'

const Description = ({title,text}) => {
  return (
    <>
    <h1>{title}</h1>
    <p>{text}</p>
    </>
  )
}

export default Description