// - - - - - - - - -
// COUNTER
// - - - - - - - - -

import { initialState } from "../state";

const { days, hours, minutes, seconds } = initialState.counter.counterState;

logState();

export default function counterReducer(state = { days, hours, minutes, seconds }, action) {
  logStateUpdate(state);

  switch(action.type) {
    
    case "INCREASE_COUNT":
      return {
        ...state,
        minutes: state.minutes + 1
        
      }

    case "DECREASE_COUNT":
      return {
        ...state,
        minutes: state.minutes - 1
      }


    default: 
      return state;
  }
  
};



// fancy logs
function logState() {
  console.log("%c Reducer > Counter state: ", "background:cyan; color: purple", initialState.counter.counterState);
}

function logStateUpdate(s) {
  console.log("%c Reducer > Counter state update: ", "background:purple; color: cyan", s);
}