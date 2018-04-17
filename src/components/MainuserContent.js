import React from 'react';


const MainuserContent = (props) => (
    <div className="usercontent">
        <h2>Hello main-user</h2>
        <p>This block is displayed for anyone with least main-user level login</p>
        <p>Here we will later show dynamic content from server when user is properly authenticated to be main-user.</p>
    </div>
  );
  
  export default MainuserContent;