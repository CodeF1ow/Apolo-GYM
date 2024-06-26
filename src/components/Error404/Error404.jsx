import React from 'react'
import styles from './Error404.module.css'
import { NavLink } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className={styles.containerError}>
      <h1>Error 404</h1>
      <p>Esta página actualmente no está activa.</p>
      <p>Lo siento.</p>
      <NavLink to='/'>
        <button>Inicio</button>
      </NavLink>
    </div>
  )
}
