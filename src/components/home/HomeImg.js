import React from 'react';

const HomeImg = ({img}) => {

    const {urls, alt_description, user, links} = img;
    
    return ( 
        <React.Fragment>
            <img className='home-img' src={urls.raw} alt={alt_description} />
            <div className='descr-home'>
                <p>Photo by <a href={user.links.html}>{user.name}</a></p>
                <p>See on <a href={links.html}>Unsplash</a></p>
            </div>
        </React.Fragment>
     );
}
 
export default HomeImg;