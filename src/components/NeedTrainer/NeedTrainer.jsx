import React from 'react'
import styles from './NeedTrainer.module.css'
import imgGym from '../../images/gym7.jpg'
import { NavLink } from 'react-router-dom'
import { useNavBar } from '../../hooks/useNavBar'

export const NeedTrainer = () => {
  const { goTop } = useNavBar()

  return (
    <div className={styles.main}>
      <h1>NECESITA UN ENTRENADOR?</h1>
      <div className={styles.containerNeedTrainer}>
        <div className={styles.containerImg}>
          <img loading='lazy' decoding='async' src={imgGym} alt='BMI img' />
        </div>
        <div className={styles.containerTextButton}>
          <h2>Encuentre fácilmente el preparador físico adecuado para sus necesidades</h2>
          <h3>Llamar: +34 693-000-000</h3>
          <NavLink to='/contact'>
            <button onClick={goTop}>CONTACTA AHORA</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
