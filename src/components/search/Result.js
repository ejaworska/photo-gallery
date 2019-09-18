import React from 'react';
import Imgs from './Imgs';
import NoResult from './NoResult';

const Result = ({data, pageNavs}) => {
 
    const {imgs, err, page, totalPages, query, token} = data;

    return ( 
        <div className='content'>
            {(!err && imgs.length > 0) ? 
                <Imgs 
                    imgsData={imgs} 
                    page={page} 
                    totalPages={totalPages} 
                    query={query}
                    token={token}
                    pageNavs={pageNavs}
                /> 
                : <NoResult />
            }
        </div>  
    );
}
 
export default Result;