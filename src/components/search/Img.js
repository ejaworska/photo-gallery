import React from 'react';
import Like from './Like';

const Img = props => {
    const {id, url, user, name, link, descr, token} = props;
    
    return ( 
        <div className='image-container'>
            {token ? <Like id={id} token={token}/> : null}
                   
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
 
export default Img;

