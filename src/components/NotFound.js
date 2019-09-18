import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export const NotFound = ({location}) => {
    const [counter, setCounter] = useState(10);
    const countdown = () => setCounter(counter - 1);

    useEffect(() => {
        setTimeout(countdown, 1000);
    });

    return (
        <div className='noResponse'>
          <p>No match for <code>{location.pathname}</code></p>
          <p>Redirect to homepage in {counter} seconds...</p>
          {counter === 0 && <Redirect to='/' />}
        </div>
    );
}

export default NotFound;