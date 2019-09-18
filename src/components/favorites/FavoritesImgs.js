import React from 'react';
import FavoritesImg from './FavoritesImg';

const FavoritesImgs = ({imgs, click}) => {

	const favImgs = imgs.map(img =>
		<FavoritesImg
			key={img.id}
			id={img.id}
			url={img.urls.small}
			user={img.user.links.html}
			name={img.user.name}
			link={img.links.html}
			descr={img.alt_description}
			click={click}
		/>
	);
	
	return (
		<div className='photos'>
			{favImgs}
		</div>
	);
}
 
export default FavoritesImgs;
