import styles from './Input.module.css'

function Input({ inputData, onChange, type, placeholder, leftIcon }) {
  return (
    <div className={styles['input-body']}>
      {leftIcon && (
        <div className={styles['input-img']}>
          {leftIcon}
        </div>
      )}
      <input 
        type={type}
        value={inputData}
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
        className={`${styles['input']} ${leftIcon ? styles['with-icon'] : ''}`}
      />
    </div>
  );
}

export default Input;
