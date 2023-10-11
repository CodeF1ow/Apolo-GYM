import React from 'react'
import styles from './About.module.css'
import imgGym from '../../images/teamGym.jpg'
import imgGym2 from '../../images/gym15.jpg'

export const About = () => {
  return (
    <div className={styles.main}>
      <h1>OUR HISTORY</h1>
      <div className={styles.containerAbout}>
        <div className={styles.containerImg}>
          <img src={imgGym} alt='Comienzo' />
        </div>
        <div className={styles.containerText}>
          <h2>COMIENZO</h2>
          <h3>Comenzamos con mucha ilusión y compromiso para ofrecerte el servicio que te mereces, queremos tanto como tú ver ese resultado, ese cambio que deseas está a tu alcance en Apolo.</h3>
        </div>

        <div className={styles.containerText}>
          <h2>A TRAVÉS DE LOS AÑOS</h2>
          <h3>Tu opinión es muy importante para nosotros, por eso nos renovamos constantemente para mejor escuchándote y convirtiéndonos en un referente de transformaciones en tu cuerpo..</h3>
        </div>
        <div className={styles.containerImg}>
          <img src={imgGym2} alt='A través de los años' />
        </div>
      </div>

    </div>
  )
}
