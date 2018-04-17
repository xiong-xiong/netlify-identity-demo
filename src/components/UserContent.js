import React from 'react';


const UserContent = (props) => (
    <div className="usercontent">
        <h2>Hello user</h2>
        <p>This block is displayed for anyone with least user lever login</p>
        <p>Here we will later show dynamic content from server when user is properly authenticated.</p>
    </div>
  );
  
  export default UserContent;