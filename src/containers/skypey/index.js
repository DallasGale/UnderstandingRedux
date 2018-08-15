import React from 'react';
import Main from './main';
import Sidebar from './sidebar';
// import store from '../../store';

// const { contacts } = store.getState();
// const { user, activeUserId } = store.getState();
// console.log("%c Container > Skypey: contacts: ", "background:green;", contacts);
// console.log("%c Container > Skypey: user: ", "background:green;", user);
// console.log("%c Container > Skypey: activeUserId: ", "background:green;", activeUserId);



const SkypeyContainer = ({ contacts, user, activeUserId }) => {
  return [
    <Sidebar key={ 2 } contacts={ contacts } />,
    <Main user={ user } activeUserId={ activeUserId } key = { 1 } />
  ];
}
 
export default SkypeyContainer;