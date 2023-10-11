import React from 'react'
import styles from './Footer.module.css'
import ApoloLogo from '../../images/Icon/ApoloLogo.jpg'
import { NavLink } from 'react-router-dom'
import { useNavBar } from '../../hooks/useNavBar'

export const Footer = () => {
  const { goTop } = useNavBar()

  return (
    <footer>
      <div className={styles.main}>

        <div className={styles.leftContainer}>
          <img src={ApoloLogo} alt='ApoloLogo' />
          <p>El trabajo duro vence al talento cuando el talento no quiere trabajar duro, elige cómo quieres cuidar tu cuerpo, y alcanza el siguiente nivel.</p>
          <div className={styles.homeSci}>
            <a target='_blank' rel='noopener noreferrer' href='https://as-work.vercel.app/'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
          <p>Política de privacidad | © 2023 Web GYM <br />Diseñador Oscar  </p>
        </div>

        <div className={styles.centerContainer}>
          <h3>Nuestras clases</h3>
          <NavLink to='/classes' onClick={goTop} style={{ textDecoration: 'none' }}>
            <p>Fitness</p>
            <p>Aerobics</p>
            <p>Yoga</p>
            <p>Fuerza de todo el cuerpo</p>
            <p>Aprender máquinas</p>
          </NavLink>
        </div>

        <div className={styles.rightContainer}>
          <h3>Horario Web</h3>
          <p className={styles.dayTitle}>Lunes - Viernes:</p>
          <p>7:00am - 21:00pm</p>
          <p className={styles.dayTitle}>Sábado:</p>
          <p>7:00am - 19:00pm</p>
          <p className={styles.dayTitle}>Domingo - Cerrado</p>
        </div>
      </div>
    </footer>
  )
}
