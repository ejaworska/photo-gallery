import React from 'react';

export const processingView = (text) => {
    return (
        <div className='loading-page'>
            <div>{`${text}...`}</div>
            <div className='loader'></div>
        </div>
    );
  }
