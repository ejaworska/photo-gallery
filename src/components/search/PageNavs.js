import React from 'react';
import PageNav from './PageNav';

const PageNavs = ({clickFirst, clickPrev, clickNext, clickLast, page, totalPages}) => {
   
    return ( 
        <div className='page-navs'>
            {page > 1 ? <PageNav click={clickFirst}  classN='fa fa-angle-double-left'/> : ''}

            {page > 1 ? <PageNav click={clickPrev}  classN='fa fa-angle-left'/> : ''}

            {page < totalPages ? <PageNav click={clickNext}  classN='fa fa-angle-right'/> : ''}

            {page < totalPages && totalPages > 1 ? <PageNav click={clickLast}  classN='fa fa-angle-double-right'/> : ''}
        </div>        
     );
}
 
export default PageNavs;