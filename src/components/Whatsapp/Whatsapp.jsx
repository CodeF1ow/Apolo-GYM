import React from 'react'
import styles from './Whatsapp.module.css'

export const Whatsapp = () => {
  return (
    <div className={styles.main}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://api.whatsapp.com/send?phone=34693733303'
      >
        <i className='bx bxl-whatsapp' />
      </a>
    </div>
  )
}
