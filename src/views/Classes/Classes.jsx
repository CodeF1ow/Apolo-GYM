import React, { useState } from 'react'
import styles from './Classes.module.css'
import imgGym from '../../images/gym15.jpg'
import imgGym2 from '../../images/Home/Cycling.webp'
import imgGym3 from '../../images/Home/Karate.jpg'
import imgGym4 from '../../images/gym1.jpg'
import imgGym5 from '../../images/gym2.jpg'
import imgGym6 from '../../images/Home/box.jpg'
import imgGym7 from '../../images/gym14.jpeg'
import imgGym8 from '../../images/gym12.jpg'
import imgGym9 from '../../images/gym13.jpeg'
import { NavLink } from 'react-router-dom'

export const Classes = () => {
  const classes = [
    {
      id: 1,
      image: imgGym,
      class: 'CROSSFIT',
      instructor: 'Maria Sanchez',
      schedule: 'Lunes: 9:00 am'
    },
    {
      id: 2,
      image: imgGym2,
      class: 'SPINING',
      instructor: 'Pablo Ruedas',
      schedule: 'Martes: 10:00 am'
    },
    {
      id: 3,
      image: imgGym3,
      class: 'KARATE',
      instructor: 'Antonio Silva',
      schedule: 'Miércoles: 11:00 am'
    },
    {
      id: 4,
      image: imgGym4,
      class: 'LEVANTAMIENTO DE PESAS',
      instructor: 'Jose Luis',
      schedule: 'Jueves: 12:00 am'
    },
    {
      id: 5,
      image: imgGym5,
      class: 'EJERCICIOS',
      instructor: 'Carlos Garcia',
      schedule: 'Viernes: 9:00 am'
    },
    {
      id: 6,
      image: imgGym6,
      class: 'BOXEO',
      instructor: 'Paco Baltasar',
      schedule: 'Sábado: 10:00 am'
    },
    {
      id: 7,
      image: imgGym7,
      class: 'MEDITACION',
      instructor: 'Lara Silva',
      schedule: 'Lunes: 11:00 am'
    },
    {
      id: 8,
      image: imgGym8,
      class: 'YOGA',
      instructor: 'Diana',
      schedule: 'Martes: 12:00 am'
    },
    {
      id: 9,
      image: imgGym9,
      class: 'FITNESS',
      instructor: 'Maria Sanchez',
      schedule: 'Miércoles: 9:00 am'
    }
  ]

  const [showClasses, setShowClasses] = useState(classes.slice(0, 5))
  const [showButton, setShowButton] = useState(true)

  const showMore = (e) => {
    e.preventDefault()
    setShowClasses(classes)
    setShowButton(false)
  }

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (
    <div className={styles.main}>
      <h1>CLASSES</h1>
      <div className={styles.cardsContainer}>

        {showClasses && showClasses.map(el => {
          return (
            <div key={el.id} className={styles.card}>
              <img src={el.image} alt='imgGym' />
              <h2>{el.class}</h2>
              <h3>{el.instructor}</h3>
              <h3>{el.schedule}</h3>
              <NavLink to='/contact'>
                <button onClick={goTop}>JOIN NOW</button>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className={styles.showMore}>
        {showButton && <button id='showMore' onClick={(e) => showMore(e)}>SHOW MORE</button>}
      </div>
    </div>
  )
}
