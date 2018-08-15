import React from 'react';
import store from '../../store';
import { increaseCount, decreaseCount } from '../../actions'; 

const { minutes } = store.getState().counter;


const buttonGroup = () => {
  return (
    <div>
      <button data-minutes={ minutes } onClick={ handleIncreaseButton }>INCREASE</button>
      <button data-minutes={ minutes } onClick={ handleDecreaseButton }>DECREASE</button>
    </div>
  );
}

function handleIncreaseButton(e) {
  var count = e.target.dataset.minutes;
  store.dispatch(increaseCount(count))
}

function handleDecreaseButton(e) {
  var count = e.target.dataset.minutes;
  store.dispatch(decreaseCount(count))
}

export default buttonGroup;