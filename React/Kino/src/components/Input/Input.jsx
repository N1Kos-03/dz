import './Input.css'


function Input({inputData, onChange, type, placeholder,img,  leftIcon}) {

  return (
    <div className='input-wrapper'>
    {
      leftIcon && (
        <div className="input-img">
          {leftIcon}
        </div>
      )
    }
       <input 
        type={type}
        value={inputData}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
        leftIcon = {img}
        />
    </div>
  )
}

export default Input