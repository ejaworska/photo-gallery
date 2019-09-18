import React from 'react';
import Img from './Img';
import Nav from './Nav';

const Imgs = ({imgsData, page, totalPages, pageNavs, token}) => {
	
	const imgs = imgsData.map(data =>
		<Img
		key={data.id}
		id={data.id}
		url={data.urls.small}
		user={data.user.links.html}
		name={data.user.name}
		link={data.links.html}
		descr={data.alt_description}
		token={token}
		/>
	);

	return (
		<React.Fragment>
			
			<Nav page={page} totalPages={totalPages} pageNavs={pageNavs} />

			<div className='photos'>
				{imgs}
			</div>

			<Nav page={page} totalPages={totalPages} pageNavs={pageNavs} />

		</React.Fragment>	
	);
}

export default Imgs;
