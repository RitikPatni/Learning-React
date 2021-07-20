import React, { useState } from 'react'
import './index.scss';

export default function Bin2Dec() {
  const [state, setState] = useState({ binaryNumber: '', decimalNumber: 0 })
  function submitForm(event) {
    event.preventDefault();
    if (state.binaryNumber) {
      setState({ binaryNumber: state.binaryNumber, decimalNumber: parseInt(state.binaryNumber, 2) });
    }
  }
  return (
    <div className='bin2dec'>
      <h2 className='bin2dec__title'>
        Binary To Decimal
      </h2>
      <form onSubmit={submitForm} className='bin2dec__form'>
        <div className="bin2dec__form__input">
          <label htmlFor="binary-number"
            className="bin2dec__form__input__label">
            Enter Binary Number
          </label>
          <input type='text' id='binary-number' name='binary-number' placeholder='Enter Binary Number' onChange={(event) => {
            setState({ binaryNumber: event.target.value, decimalNumber: state.decimalNumber })
          }}
            pattern="^[0-1]*$"
            value={state.binaryNumber}
            className='bin2dec__form__input__field' required />
        </div>
        <p className='bin2dec__form__output'>
          Decimal Number = {state.decimalNumber}
        </p>
        <button type="submit" className='bin2dec__form__submit-button'>
          Submit
        </button>
      </form >
    </div>
  )
}
