import styles from './Input.module.css'
import React from 'react'

const Input = React.forwardRef(({inputData, onChange, type, placeholder, leftIcon}, ref) => {
  return (
    <div className={styles['input-body']}>
      {leftIcon && (
        <div className={styles['input-img']}>
          {leftIcon}
        </div>
      )}
      <input 
        ref={ref}
        type={type}
        value={inputData}
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
        className={`${styles['input']} ${leftIcon ? styles['with-icon'] : ''}`}
      />
    </div>
  );
})

export default Input;
