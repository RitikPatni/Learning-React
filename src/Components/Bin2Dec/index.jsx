import React, { useState } from 'react'
import './index.css';

export default function Bin2Dec() {
  const [state, setState] = useState({ binaryNumber: '', decimalNumber: 0 })
  function submitForm(event) {
    event.preventDefault();
    if (state.binaryNumber) {
      setState({ binaryNumber: state.binaryNumber, decimalNumber: parseInt(state.binaryNumber, 2) });
    }
  }
  return (
    <form onSubmit={submitForm} className='form'>
      <label htmlFor="binary-number"
      ></label>
      <input type='text' id='binary-number' name='binary-number' placeholder='Enter Binary Number' onChange={(event) => {
        setState({ binaryNumber: event.target.value, decimalNumber: state.decimalNumber })
      }}
        pattern="^[0-1]*$"
        value={state.binaryNumber}
        className='form__input' required />
      <p>
        {state.decimalNumber}
      </p>
      <button type="submit" className='form__submit-button'>
        Submit
      </button>
    </form >
  )
}
