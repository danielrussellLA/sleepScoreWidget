import React from 'react';
import { css } from 'emotion'
import './Global.css';
import SleepScoreWidget from './components/SleepScoreWidget'

const App = () => {
  return (
    <div className={css`
      padding: 100px 0.5rem 0;
      height: 100vh;
    `}>
      <SleepScoreWidget />
    </div>
  );
}

export default App;
