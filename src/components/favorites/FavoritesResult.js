import React from 'react';
import FavoritesImgs from './FavoritesImgs';
import NoFavorites from './NoFavorites';

const FavoritesResult = ({imgs, click }) => {
 
    return ( 
        <div className='content'>
            {imgs.length > 0 ? <FavoritesImgs imgs={imgs} click={click}/> : <NoFavorites />}
        </div>  
    );
}
 
export default FavoritesResult;
