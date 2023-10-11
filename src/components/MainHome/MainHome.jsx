import React from 'react'
import styles from './MainHome.module.css'
import { NavLink } from 'react-router-dom'

export const MainHome = () => {
  return (
    <div>
      <section className={styles.home}>
        <div className={styles.homeContent}>
          <h1>ENTRENA DIFERENTE</h1>
          <h3>MANTEN TU CUERPO EN FORMA Y PERFECTO</h3>
          <div className={styles.btnBox}>
            <NavLink to='/classes'>
              <span href='/classes'>NUESTRAS CLASES</span>
            </NavLink>
          </div>
        </div>

        <div className={styles.homeSci}>
          <a target='_blank' rel='noopener noreferrer' href='https://apolo-gym.netlify.app/'><i className='bx bx-desktop' /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kiri86dev/'><i className='bx bxl-linkedin' /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/K1ri86'><i className='bx bxl-github' /></a>
        </div>
      </section>
    </div>
  )
}
