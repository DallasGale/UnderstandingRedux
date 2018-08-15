import { contacts } from './static-data';
import { counterState } from './counter-data';
import { bankState } from './bank-data';

export const initialState = {
  contacts: { contacts },
  counter: { counterState },
  bank: { bankState }
};