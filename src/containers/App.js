import React from 'react';
import './App.css';
import store from '../store';

// Import Components
// import Bank from '../containers/bank/';
// import Counter from '../containers/counter/';
import SkypeyContainer from '../containers/skypey/';

const { contacts, user, activeUserId } = store.getState();

const App = () => {
  return (
    <div className="App">
      
      {/* Skypey */}
      <section key = { 1 } className="example skypey">
        <SkypeyContainer contacts={ contacts } user={ user } activeUserId={ activeUserId } />
      </section>

      {/* Counter */}
      {/* <section key = { 2 } className="example counter">
        <Counter />
      </section> */}

      {/* Bank Transaction */}
      {/* <section key = { 3 } className="example bank">
        <Bank />
      </section> */}
    </div>
  );
}


export default App;
