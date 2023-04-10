import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state=> state.users)
  return (
    <div>
      <ul>
      Total Users: {users.length} 
        <br/>
        Users! 
        {users.map(user=>{
         return <li key={user}>{user.username}: {user.hometown}</li>
        })}

        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
