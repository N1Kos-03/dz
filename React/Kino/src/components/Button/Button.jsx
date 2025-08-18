import styles from './Button.module.css'
import React from 'react'



const Button = React.forwardRef(({text, onClick}, ref) => {
  return <button ref={ref} className={styles['button']} onClick={onClickk}>{text}</button>
})

export default Button