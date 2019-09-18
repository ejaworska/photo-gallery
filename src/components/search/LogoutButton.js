import React from 'react';

const LogoutButton = ({click}) => {
    return ( 
        <div className='top-button'>
            <button onClick={click}>Log out</button>
        </div>
     );
}
 
export default LogoutButton;