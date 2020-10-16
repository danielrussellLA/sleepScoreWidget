import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { generate24HourOptions } from '../data/hours'

import DurationDropdown from './DurationDropdown'

const SleepForm = ({ onSubmit }) => {

  const options = generate24HourOptions()

  const [isDisabled, setIsDisabled] = useState(true)
  const [formState] = useState({
    durationBed: '',
    durationSleep: ''
  })

  const onDropdownUpdate = (formStateKey) => {
    return e => {
      const { value } = e.target
      if (value === '') formState[formStateKey] = ''
      else formState[formStateKey] = Number(e.target.value)
    }
  }

  const onFormSubmit = e => {
    e.preventDefault()
    onSubmit(formState)
  }

  const calcEnabled = () => {
    const { durationBed } = formState
    if (durationBed === 0) {
      setIsDisabled(true)
      return
    }
    let disabled = !Object.values(formState).every(val => typeof val === 'number')
    setIsDisabled(disabled)
  }

  const buttonDisabledStyles = `
    background: #e5e5e5;
    color: #626262;
    border: none;
  `

  const buttonStyles = `
    color: #fff;
    background: #6573fe;
    transition: background 0.3s ease;
    &:hover {
      cursor: pointer;
    }
  `

  return (
    <div className={css`
      height: 100%;
      width: 100%;
    `}>
      <form
        onSubmit={onFormSubmit}
        onChange={calcEnabled}
        className={css`
          display: flex;
          padding: 1rem;
          flex-direction: column;
        `}
      >
        <DurationDropdown
          label="Duration in Bed"
          options={options}
          onChange={onDropdownUpdate('durationBed')}
        />
        <DurationDropdown
          label="Duration Sleeping"
          options={options}
          onChange={onDropdownUpdate('durationSleep')}
        />
        <button
          disabled={isDisabled}
          className={css`
            border-radius: 4px;
            padding: 0.75rem 1rem;
            border: none;
            font-weight: 700;
            font-size: 1rem;
            ${isDisabled ? buttonDisabledStyles : buttonStyles}
          `}
        >
          Calculate
        </button>
      </form>
    </div>
  )
}

SleepForm.propTypes = {
  onSubmit: PropTypes.func
}

SleepForm.defaultProps = {
  onSubmit: () => { }
}

export default SleepForm;
