import React from 'react';

const FavoritesImg = ({id, url, user, name, link, descr, click}) => {

    return ( 
        <div className='image-container'>

            <span 
                className='top-icon delete' 
                onClick={() => {click(id)}}
            >
                <img src={require('../../img/delete.png')} alt='x'/>
            </span>

            <a className='img' href={link} >
                <img src={url} alt={descr} />
            </a>

            <div className='descr'>
                <p>Photo by <a href={user}>{name}</a></p>
                <p>on <a href={link}>Unsplash</a></p>
            </div>

        </div>
     );
}
 
export default FavoritesImg;
