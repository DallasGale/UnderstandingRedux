import React from 'react';

const Empty = ({ user }) => {

  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];

  return (
    <div>
      <h1>Welcome { first_name }</h1>
      <img src={ profile_pic } alt={ name } />
      <p>
        <b>Status: </b> { status }
      </p>

      <button>
        Start a conversation
      </button>

      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who is available
      </p>
    </div>
  )
};

export default Empty;