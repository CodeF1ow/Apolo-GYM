import React from 'react'
import styles from './CalculateBMI.module.css'
import imgGym from '../../images/gym15.jpg'
import { ToastContainer } from 'react-toastify'
import { useInputBMI } from '../../hooks/useInputBMI'

export const CalculateBMI = () => {
  const { input, handleChange, calculateBMI } = useInputBMI()

  return (
    <div className={styles.main}>
      <h1>CALCULA TU BMI</h1>
      <div className={styles.BMIImg}>
        <div className={styles.containerBMI}>
          <h2>Determine fácilmente su índice de masa corporal con nuestra precisa herramienta de cálculo.</h2>

          <div className={styles.inputs}>
            <input type='number' placeholder='Tu peso/kg...' name='weight' onChange={(e) => handleChange(e)} value={input.weight} />
            <input type='number' placeholder='Tu altura/cm...' name='height' onChange={(e) => handleChange(e)} value={input.height} />
          </div>

          <div className={styles.labels}>
            <label>Su BMI es: <span>{input.BMI}</span></label>
            <label>Tu peso es: <span>{input.weightBMI}</span></label>
          </div>
          <button className={styles.buttonCalculate} onClick={() => calculateBMI()}>Calcular</button>
        </div>
        <ToastContainer />

        <div className={styles.containerImg}>
          <img loading='lazy' decoding='async' src={imgGym} alt='BMI img' />
        </div>

      </div>
    </div>
  )
}
