import React, {useState} from 'react'
import FormSignUp from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';




    const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  function btn () {
    alert(' Error ')
  }

  return (
    <>
      <div className='form-container'>
        <button onClick={btn} className='close-btn'>x</button>
        <div className='form-content-left'>
          <img className='form-img' src='rulet3.png' alt='rulet' />
        </div>
        {!isSubmitted ? <FormSignUp submitForm={submitForm} />
        : <FormSuccess />}
        
      </div>
    </>
  );
};


export default Form;

