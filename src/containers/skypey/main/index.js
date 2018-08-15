import React from 'react';
import Empty from './empty.container';
import ChatWindow from './chatWindow.container';
import './styles.css';

const Main = ({ user, activeUserId }) => {

  const renderMainContent = () => {
    if (!activeUserId) {
      return (
        <React.Fragment>
          <h1>activeUserId: { user.activeUserId }</h1>
          <Empty user={ user } activeUserId={ activeUserId } />
        </React.Fragment>
      );
    } 
    
    else {
      return (
        <React.Fragment>
          <h1>activeUserId: { user.activeUserId }</h1>
          <ChatWindow user={ user } activeUserId={ activeUserId }  />
        </React.Fragment>
      );
    }
  };


    
  return ( 
    <main className="Main">
      { renderMainContent() }
    </main>
  );
};

export default Main;