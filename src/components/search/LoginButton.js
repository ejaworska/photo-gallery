import React from 'react';

const LoginButton = ({click}) => {
    return ( 
        <div className='top-button'>
            <button onClick={click}>Log in</button>
        </div>
     );
}
 
export default LoginButton;