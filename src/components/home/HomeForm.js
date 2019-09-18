import React from 'react';

const HomeForm = ({change, keyPress}) => {

    return ( 
        <form className='search-home'>
            <input placeholder='Search photo...' onChange={change} onKeyDown={keyPress}/>
        </form>
     );
}
 
export default HomeForm;