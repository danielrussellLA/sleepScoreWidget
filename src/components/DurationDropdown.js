import React from 'react';
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { generate24HourOptions } from '../data/hours'

const DurationDropdown = ({ label, options, onChange }) => {
  return (
    <div className={css`
      display: flex;
      align-items: flex-start;
      margin: 0 0 1rem;
      justify-content: space-between;
      flex-direction: column;
    `}>
      <label
        htmlFor={label}
        className={css`
          margin: 0 0 0.5rem 0.5rem;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 500;
        `}
      >
        {label}
      </label>
      <select
        id={label}
        onChange={onChange}
        className={css`
          width: 100%;
          padding: 0.5rem 1rem;
          border: 2px solid #364677;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          background: #1f2947;
          appearance: none;
          &:hover {
            cursor: pointer;
          }
        `}
      >
        {options.map((option, idx) => {
          return (
            <option
              key={idx}
              value={option.value}
            >
              {option.display}
            </option>
          )
        })}
      </select>
    </div>
  )
}

DurationDropdown.proTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
}

DurationDropdown.defaultProps = {
  label: `field`,
  options: generate24HourOptions()
}

export default DurationDropdown;
