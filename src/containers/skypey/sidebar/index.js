import React from 'react';
import './styles.css';
import User from '../user';
import { values } from 'lodash';

const Sidebar = ({ contacts }) => {
  return ( 
    <aside className="Sidebar">
      <ul>
        {
          values(contacts).map(contact => {
            return(
              <User key={ contact.user_id } user={ contact } />
            )
          })
        }
      </ul>
    </aside>
   );
}
 
export default Sidebar;