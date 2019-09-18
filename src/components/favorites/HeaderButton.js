import React from 'react';

const HeaderButton = ({style, click, text}) => {
    return ( 
        <button 
            className='button' 
            type='button' 
            style={style} 
            onClick={click}
        >
            {text}   
        </button>
     );
}
 
export default HeaderButton;