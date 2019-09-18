import React from 'react';
import HomeForm from './HomeForm';
import HomeImg from './HomeImg';

const HomeContent = ({img, change, keyPress}) => {

    return ( 
        <div>
            <HomeForm change={change} keyPress={keyPress}/>
            <HomeImg img={img}/>
        </div>
     );
}
 
export default HomeContent;

