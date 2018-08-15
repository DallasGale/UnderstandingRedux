// - - - - - - - - -
// BANK TRANS.
// - - - - - - - - -

import { initialState } from "../state";
import { BANK_WITHDRAWAL } from "../constants/action-types";

const { name, balance } = initialState.bank.bankState;

console.log("%c Reducer > Bank state: ", "background:cyan; color: purple", initialState.bank.bankState);




export default function bankReducer(state = { name, balance }, action) {
  console.log("%c Reducer > Bank state update: ", "background:purple; color: cyan", state);

  switch(action.type) {
    case BANK_WITHDRAWAL: 
      return {
        ...state,
        balance: action.payload
      };
    default: 
      return state;
  }
};