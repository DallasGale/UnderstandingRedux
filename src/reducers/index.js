// - - - - - - -
// REDUCERS
// - - - - - - -

import { combineReducers } from "redux";

// Skypey
import contacts from './skypey/contacts.reducer';
import activeUserId from './skypey/activeUserId.reducer';
import user from './skypey/user.reducer';
// import { contacts } from '../state/static-data';
// import messages from './skypey/messages.reducer';
// import typing from './skypey/typing.reducer';

// Counter
// import counter from './counter.reducer';

// Bank Trans.
// import bank from './bank.reducer';



export default combineReducers({
  contacts,
  user,
  activeUserId,
  // bank,
  // counter,
  // messages,
  // typing
});