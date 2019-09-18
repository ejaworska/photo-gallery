import React from 'react';

const NoFavorites = () => {
    return (
        <div className='noResponse'>

            <p>You have no favorites...</p>

            <img src={require('../../img/sad.png')}  alt='sad face'/>

        </div>
    );
}

export default NoFavorites;