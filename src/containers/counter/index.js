import React from 'react';
import ButtonGroup from './buttonGroup';
import store from '../../store';


// - - -
// State
// - - -
const { days, hours, minutes, seconds } = store.getState().counter;
console.log("%c Container > Counter: days: ", "background:green;", days);
console.log("%c Container > Counter: hours: ", "background:green;", hours);
console.log("%c Container > Counter: minutes: ", "background:green;", minutes);
console.log("%c Container > Counter: seconds: ", "background:green;", seconds);


const Counter = () => {
  return (
    <div key={ 1 } className="container">
      <table width="100%" cellPadding="10">
      <tbody>
        <tr>
          <td width="25%">
            <h4>Days</h4>
            { days }
          </td>
          <td width="25%">
            <h4>Hours</h4>
            { hours }
          </td>
          <td width="25%">
            <h4>Minutes</h4>
            { minutes }
          </td>
          <td width="25%">
            <h4>Seconds</h4>
            { seconds }
          </td>
        </tr>
        </tbody>
      </table>
      <ButtonGroup />
    </div>
  );
}



export default Counter;