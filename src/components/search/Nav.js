import React from 'react';

const Nav = ({page, totalPages, pageNavs}) => {

    return (
        <nav className='searchNav'>
            <span className='page-info'>{`page: ${page} / ${totalPages}`}</span>
            {pageNavs}    
        </nav>
    );
}
 
export default Nav;