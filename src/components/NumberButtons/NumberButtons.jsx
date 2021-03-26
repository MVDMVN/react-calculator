import React, { useState } from 'react';
import './NumberButtons.scss';

function NumberButtons() {
  return (
    <div className="buttons-area">
      <button className="clear-button">Clear</button>
      <div className="buttons-container">
        <div className="numbers-container">
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
          <button className="number-button">1</button>
        </div>
        <div className="operators-container">
          <button className="operator-button">+</button>
          <button className="operator-button">-</button>
          <button className="operator-button">*</button>
          <button className="operator-button">/</button>
        </div>
      </div>
    </div>
  );
}

export default NumberButtons;
