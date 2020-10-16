import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { css } from 'emotion'
import SleepForm from './SleepForm'

const SleepScoreWidget = ({ title }) => {
  const [sleepScore, setSleepScore] = useState(-1)

  const onFormSubmit = (formState) => {
    const { durationBed, durationSleep } = formState
    fetch('http://localhost:8080/sleep-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        durationBed,
        durationSleep
      })
    })
      .then(res => res.json())
      .then(data => {
        setSleepScore(data)
      })
  }

  return (
    <div>
      <section className={css`
        border: 2px solid #364677;
        border-radius: 4px;
        box-shadow: 2px 4px 4px rgba(0,0,0,.1);
        overflow: hidden;
        max-width: 800px;
        background: #293456;
        margin: auto;
      `}>
        <h3 className={css`
          color: #535252;
          padding: 1rem;
          margin: 0;
          color: #fff;
          font-size: 1.25rem;
        `}>
          {title}
        </h3>
        <div className={css`
            display: flex;
            align-items: center;
            border-top: 2px solid #364677;
            flex-direction: column;
            min-height: 230px;
            @media (min-width: 800px) {
                flex-direction: row;
            }
          `}>
          <div className={css`
            flex: 1;
            border-right: none;
            border-bottom: 2px solid #364677;
            width: 100%;
            @media (min-width: 800px) {
              width: initial;
              border-right: 2px solid #364677;
              border-bottom: none;
            }
          `}>
            <SleepForm onSubmit={onFormSubmit} />
          </div>
          <div className={css`
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 230px;
            flex: 1;
            color: ${sleepScore < 100 ? '#fff' : '#00a6a4'};
            position: relative;
            transition: color 0.2s ease-in;
            width: 100%;
            h2 {
              font-size: 8rem;
              margin-top: 2rem;
              text-align: center;
              transition: opacity 0.2s ease-in;
              opacity: ${sleepScore > -1 ? 1 : 0};
            }
            span {
              font-size: 1rem;
              color: #fff;
            }
          `}>
            <span className={css`
              position: absolute;
              top: 1rem;
              left: 50%;
              margin-left: -44px;
              font-weight: 700;
            `}
            >
              Your Score
            </span>
            <h2>
              {sleepScore > -1 ? sleepScore : ''}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

SleepScoreWidget.propTypes = {
  title: PropTypes.string
}

SleepScoreWidget.defaultProps = {
  title: `Calculate Your Sleep Score`
}

export default SleepScoreWidget;
