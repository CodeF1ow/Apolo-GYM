import React from 'react'
import styles from './CardsAdvantage.module.css'

export const CardsAdvantage = () => {
  return (
    <div className={styles.main}>
      <h1>¿POR QUÉ ELEGIRNOS?</h1>
      <div className={styles.cardsContainer}>

        <div className={styles.card}>
          <i className='bx bxs-check-square' />
          <h2>PROGRESION</h2>
          <h3>Nuestro equipo de expertos trabajará con usted para crear un plan personalizado que le ayude a alcanzar el éxito paso a paso.</h3>
        </div>

        <div className={styles.card2}>
          <i className='bx bxs-chart' />
          <h2>EJERCICIOS</h2>
          <h3>Con una variedad de entrenamientos para elegir, tendrás todo lo que necesitas para estar en la mejor forma de tu vida..</h3>
        </div>

        <div className={styles.card3}>
          <i className='bx bx-food-menu' />
          <h2>NUTRICION</h2>
          <h3>Nuestro equipo trabajará con usted para crear un plan de alimentación personalizado que le ayude a alcanzar sus objetivos de salud específicos..</h3>
        </div>
      </div>
    </div>
  )
}
