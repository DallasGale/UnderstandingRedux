// - - - - - - - 
// ACTION CREATOR
// - - - - - - -

// import constants
import { SET_ACTIVE_USER_ID, BANK_WITHDRAWAL } from "../constants/action-types";

// Skypey
export function setActiveUserId(id) {
  return {
    type: SET_ACTIVE_USER_ID,
    payload: id
  }
};

// Counter
export function increaseCount(count) {
  return {
    type: "INCREASE_COUNT",
    payload: count
  }
};

export function decreaseCount(count) {
  return{
    type: "DECREASE_COUNT",
    payload: count
  }
};


// Bank
export function setWithdrawnBalance(balance) {
  return {
    type: BANK_WITHDRAWAL,
    payload: balance
  }
};
  