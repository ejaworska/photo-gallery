import React from 'react';

const Header = ({clickReturn}) => {
  
    return ( 
        <header>

          <h1>My <span className='heartFav'><i className='fa fa-heart'></i></span> Images</h1>

         
            <div className='arrowLeft' onClick={clickReturn}>
              <img  
              src={require('../../img/go-left.png')} 
              alt='return icon'
              /> 
            </div>
          
                        
        </header>
     );
}
 
export default Header;