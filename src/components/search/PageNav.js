import React from 'react';

const PageNav = ({click, classN}) => {
    return ( 
        <span 
          className='next'
          onClick={click}>
          <i 
          className={classN}>
          </i>
        </span> 
     );
}
 
export default PageNav;