import React from 'react'
import styles from './Contact.module.css'
import { ToastContainer } from 'react-toastify'
import { useInput } from '../../hooks/useInput'

export const Contact = () => {
  const { input, handleChange, handleNotification } = useInput()

  return (
    <div className={styles.main}>

      <div className={styles.leftContainer}>
        <h2>¡Estamos aquí para ayudarte! Para moldear tu cuerpo.</h2>
        <p>En Apolo GYM, Estamos dedicados a ayudarte a lograr el cuerpo de tus sueños. Nuestros entrenadores y nutricionistas expertos trabajarán contigo para crear un plan personalizado de nutrición y acondicionamiento físico que lo ayude a alcanzar sus objetivos específicos..</p>
        <div className={styles.containerInfo}>
          <div className={styles.infoTop}>
            <h3>Puertollano, (Ciudad Real)</h3>
            <p>Calle Vélez, <br />5</p>
          </div>
          <div className={styles.infoTop}>
            <h3>Horario de apertura</h3>
            <p>Lunes a Viernes: 7:00 am — 21:00 pm <br />Sábado: 7:00 am — 19:00 pm</p>
          </div>
          <div className={styles.infoBottom}>
            <h3>Información</h3>
            <p>+34-693-73-33-03 <br />k1ri86mail@gmail.com</p>
          </div>
          <div className={styles.icons}>
            <h3>Follow Us On</h3>
            <a target='_blank' rel='noopener noreferrer' href='https://apolo-gym.vercel.app/'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kiri86dev/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/K1ri86'><i className='bx bxl-github' /></a>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <form id='form' action='https://formsubmit.co/k1ri86mail@gmail.com' method='POST'>
          <h3>Déjanos tu información</h3>
          <input onChange={(e) => handleChange(e)} value={input.name} required type='text' name='name' id='name' placeholder='tu nombre...' />
          <input onChange={(e) => handleChange(e)} value={input.email} required type='email' name='email' id='email' placeholder='tuemail@email.com...' />
          <textarea onChange={(e) => handleChange(e)} value={input.message} required name='message' id='message' placeholder='Apreciamos tus comentarios...' />
          <div>
            <button className={styles.buttonSubmit} onClick={handleNotification} type='submit'>ENVIAR AHORA</button>
          </div>
          {/* Redirigir al enviar mensaje */}
          <input type='hidden' name='_next' value='https://apolo-gym.vercel.app/contact' />
          {/* Autoresponse */}
          <input type='hidden' name='_autoresponse' value='Gracias por tu mensaje, te responderé en breve.' />
          <ToastContainer />
        </form>
      </div>

    </div>
  )
}
