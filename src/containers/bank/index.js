import React from 'react';
import formatNumber from 'format-number';
import store from '../../store';
import { setWithdrawnBalance } from '../../actions';

// - - -
// State
// - - -
const { name, balance } = store.getState().bank;
console.log("%c Container > Bank: name: ", "background:green;", name);
console.log("%c Container > Bank: balance: ", "background:green;", balance);


const Bank = () => {
  return ( 
    <div className="container">
      <p className="App__username">Hello, { name }! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })( balance )}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button data-amount="10000" onClick={ dispatchWithdrawBtn }>WITHDRAW $10,000</button>
        <button data-amount="5000" onClick={ dispatchWithdrawBtn }>WITHDRAW $5,000</button>
      </section>

      <p data-amount={ balance } className="App__giveaway" onClick={ dispatchWithdrawBtn }>Give away all your cash to charity</p>
    </div>
   );
}

// Button Action Dispatch

function dispatchWithdrawBtn(e) {
  const amount = balance - e.target.dataset.amount;
  console.log("%c Container > Bank > Dispatcher: balance: ", "background:orange; color: black;", amount);
  store.dispatch(setWithdrawnBalance(amount));
} 

 
export default Bank;