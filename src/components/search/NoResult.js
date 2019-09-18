import React from 'react';

const NoResult = () => {
    return (
        <div className='noResponse'>
            <p>No Images match your search</p>
            <img src={require('../../img/sad.png')}  alt='sad face'/>
        </div>
    );
}

export default NoResult;