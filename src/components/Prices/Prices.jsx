import React from 'react'
import styles from './Prices.module.css'
import imgGym from '../../images/gym3.jpg'
import imgGym2 from '../../images/gym13.jpeg'
import imgGym3 from '../../images/gym1.jpg'
import { NavLink } from 'react-router-dom'
import { useNavBar } from '../../hooks/useNavBar'

export const Prices = () => {
  const { goTop } = useNavBar()

  return (
    <div>
      <section className={styles.containerPrices}>
        <h1>PRECIOS</h1>
        <div className={styles.cardsContainer}>

          <div className={styles.card}>
            <img src={imgGym} alt='imgGym' width='150px' height='150px' />
            <h2>PRINCIPIANTES</h2>
            <h3>39<span>€</span>p/m</h3>
            <p className={styles.fitnessPlan}>Fitness plan</p>
            <p className={styles.cycling}>Spining</p>
            <p className={styles.weightLossPlan}>Plan de pérdida de peso</p>
            <p className={styles.personalTrainer}>Entrenador personal</p>
            <p className={styles.extraActivity}>Actividad extra gratis</p>
            <NavLink to='/contact'>
              <button onClick={goTop}>COMPRAR AHORA</button>
            </NavLink>
          </div>

          <div className={styles.card2}>
            <img src={imgGym2} alt='imgGym' width='150px' height='150px' />
            <h2>AVANZADO</h2>
            <h3>65<span>€</span>p/m</h3>
            <p className={styles.fitnessPlan}>Fitness plan</p>
            <p className={styles.cycling}>Spining</p>
            <p className={styles.weightLossPlan}>Plan de pérdida de peso</p>
            <p className={styles.personalTrainer}>Entrenador personal</p>
            <p className={styles.extraActivity}>Actividad extra gratis</p>
            <NavLink to='/contact'>
              <button onClick={goTop}>COMPRAR AHORA</button>
            </NavLink>
          </div>

          <div className={styles.card3}>
            <img src={imgGym3} alt='imgGym' width='150px' height='150px' />
            <h2>ROCKY BALBOA</h2>
            <h3>100<span>€</span>p/m</h3>
            <p className={styles.fitnessPlan}>Fitness plan</p>
            <p className={styles.cycling}>Spining</p>
            <p className={styles.weightLossPlan}>Plan de pérdida de peso</p>
            <p className={styles.personalTrainer}>Entrenador personal</p>
            <p className={styles.extraActivity}>Actividad extra gratis</p>
            <NavLink to='/contact'>
              <button onClick={goTop}>COMPRAR AHORA</button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
