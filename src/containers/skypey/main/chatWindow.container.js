import React from 'react';

const ChatWindow = ({ activeUserId}) => {
  return (
    <div>
      Conversation for user id: { activeUserId }
    </div>
  )
};

export default ChatWindow;