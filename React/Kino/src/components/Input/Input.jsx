import styles from './Input.module.css'

function Input({ inputData, onChange, type, placeholder, leftIcon }) {
  return (
    <div className={styles['input-wrapper']}>
      {leftIcon && (
        <div className={styles['input-img']}>
          {leftIcon}
        </div>
      )}
      <input 
        type={type}
        value={inputData}
        onChange={onChange}
        placeholder={placeholder}
        className={styles['input']}
      />
    </div>
  );
}

export default Input;
